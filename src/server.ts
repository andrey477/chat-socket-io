import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import http from 'http';
import {Server} from 'socket.io';
import {ChatController} from "./controllers/ChatController";
import * as path from "path";
import {config} from "./configs/config";
import {database, pool} from "./configs/data-source";
import session from 'express-session';
import router from "./routes";
import passport from "passport";
import ConnectPgSimple from 'connect-pg-simple';

const PORT = config.port || 5000;

const app = express();
const PgStore = ConnectPgSimple(session);

app.use(express.json());
app.use(cors());
app.disable('etag'); /** исправление 304 статус кода **/

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

app.use(passport.initialize());

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
	store: new PgStore({
		pool,
	}),
	cookie: {
		httpOnly: true,
		maxAge: 60 * 60 * 1000,
	}
}));

app.use(passport.authenticate('session'));

app.use('/api', router);

const server = http.createServer(app);
const io = new Server(server);
const chatController = new ChatController();

const init = async () => {
	try {
		/** Database **/
		await database.initialize();

		/** Server **/
		server.listen(PORT, () => {
			console.log(`server started on http://localhost:${PORT}`);
		});

		/** Socket **/
		io.on('connection', (socket) => {
			socket.on('join', ({ username, room }) => {
				socket.join(room);
				const roomMessages = chatController.getRoomMessages(room);
				socket.emit('roomMessages', roomMessages);
				io.to(room).emit('message', {
					text: `${username} has joined`
				});
			});

			socket.on('sendMessage', ({ username, room, text }) => {
				chatController.addMessageToRoom(room, {
					username,
					text
				})
				io.to(room).emit('message', { username, text });
			});

		});
	} catch (error) {
		console.error(error);
	}
}

init();

