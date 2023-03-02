import axios from "axios";

const api = axios.create({});

api.interceptors.response.use(undefined, (error) => {
	console.log('interceptors');
	console.log(error);
});

export default api;
