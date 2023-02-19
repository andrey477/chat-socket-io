import {Message} from "../types/message";

const usersDatabase: string[] = [];

export const messagesDatabase: Map<string, Message.Message[]> = new Map<string, Message.Message[]>();

export class ChatController {
	addMessageToRoom(room: string, message: Message.Message) {
		const messages = messagesDatabase.get(room);
		if (messages) {
			messagesDatabase.set(room, [...messages, message]);
		} else {
			messagesDatabase.set(room, [message]);
		}
	}

	getRoomMessages(room: string): Message.Message[] {
		const messages = messagesDatabase.get(room);
		if (messages) {
			return messages;
		}
		return [];
	}
}
