import {NextFunction, Request, Response} from "express";

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	console.log('isAuthenticated: ', req.isAuthenticated());
	if (req.isAuthenticated()) {
		return next();
	} else {
		return res.send(401);
	}
}
