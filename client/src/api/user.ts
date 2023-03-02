import {User} from "../types/user";
import api from "./index";

export const current = async (): Promise<User.Data> => {
	try {
		const { data } = await api.get('/api/user/current');
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
