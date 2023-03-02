import bcrypt from "bcrypt";
import {UserModel} from "../models/UserModel";
import {database} from "../configs/data-source";

export class AuthService {
	static hashPassword(password: string) {
		return bcrypt.hashSync(password, 10);
	}

	static createUser(requestBody: any) {
		const { username, password, email } = requestBody;
		const hashedPassword = AuthService.hashPassword(password);
		const user = new UserModel();
		user.username = username;
		user.password = hashedPassword;
		user.email = email;
		return user;
	}

	static async findUser(username: string) {
		return await database.manager.findOne(UserModel, {
			where: { username }
		});
	}


}
