export declare namespace User {
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
