declare global {
	namespace Express {
		interface User {
			username: string;
			id: number | undefined;
		}
	}
}

export {};
