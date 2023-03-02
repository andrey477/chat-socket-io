import {Router} from "express";

const router = Router();

router.get('/test', (req, res, next) => {
	console.log(req.user);
	res.status(200).json({ message: 'success'});
});

export default router;
