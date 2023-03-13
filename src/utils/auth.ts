import {NextFunction, Request, Response} from "express";

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated()) {
		return next();
	} else {
		return res.send(401);
	}
}
