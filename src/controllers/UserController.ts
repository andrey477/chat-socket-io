import {NextFunction, Request, Response} from "express";

export class UserController {
	static current(req: Request, res: Response, next: NextFunction) {
		if (req.user) {
			return res.status(200).json(req.user);
		} else {
			return res.status(401).json({ message: 'Unauthorized'});
		}
	}
}
