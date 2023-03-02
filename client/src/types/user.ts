export declare namespace User {
	interface Data {
		id: number;
		username: string;
	}

	namespace SignUp {
		interface Request {
			username: string;
			email: string;
			password: string;
		}
	}

	namespace Login {
		interface Request {
			username: string;
			password: string;
		}
	}
}
