import api from "./index";
import {User} from "../types/user";

export const signUp = async (body: User.SignUp.Request): Promise<void> => {
	try {
		await api.post('/api/auth/signup', body);
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export const login = async (body: User.Login.Request): Promise<void> => {
	try {
		await api.post('/api/auth/login/password', body);
	} catch (error) {
		console.error(error);
		throw error;
	}
}
