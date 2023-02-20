import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import {ChatController} from "./controllers/ChatController";
import * as path from "path";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.disable('etag'); /** исправление 304 статус кода **/

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

const server = http.createServer(app);
const io = new Server(server);
const chatController = new ChatController();

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

server.listen(PORT, () => {
	console.log(`server started on http://localhost:${PORT}`);
});
