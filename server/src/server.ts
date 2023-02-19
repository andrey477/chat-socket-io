import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import {ChatController, messagesDatabase} from "./controllers/ChatController";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.disable('etag'); /** исправление 304 статус кода **/

const server = http.createServer(app);
const io = new Server(server);
const chatController = new ChatController();

io.on('connection', (socket) => {
	socket.on('join', ({ username, room }) => {
		console.log(`${username} has joined room: ${room}`)
		socket.join(room);
		const roomMessages = chatController.getRoomMessages(room);
		socket.emit('roomMessages', roomMessages);
		io.to(room).emit('message', {
			text: `${username} has joined`
		});
	});

	socket.on('sendMessage', ({ username, room, text }) => {
		console.log('sendMessage: ', text);
		chatController.addMessageToRoom(room, {
			username,
			text
		})
		io.to(room).emit('message', { username, text });
	});

	console.log('user connected');
});

server.listen(PORT, () => {
	console.log(`server started on http://localhost:${PORT}`);
});
