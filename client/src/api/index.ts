import axios from "axios";

export const testApi = async (): Promise<{ message: string }> => {
	try {
		const { data } = await axios.get('/api/test');
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
