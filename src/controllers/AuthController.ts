import {NextFunction, Request, Response} from "express";
import {database} from "../configs/data-source";
import {AuthService} from "../services/AuthService";

export class AuthController {
	async signUp(req: Request, res: Response, next: NextFunction) {
		const { username } = req.body;
		const candidate = await AuthService.findUser(username);

		if (candidate) {
			return res.status(400).json({ message: 'user already exist'});
		}

		const user = AuthService.createUser(req.body);
		const savedUser = await database.manager.save(user);
		req.login({
			id: savedUser.id,
			username: savedUser.username
		}, (err) => {
			if (err) { return next(err); }
			res.status(200).json({
				user: {
					id: savedUser.id,
					username: savedUser.username
				}
			});
		});
	}
}
