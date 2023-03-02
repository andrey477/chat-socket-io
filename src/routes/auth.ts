import {Router} from "express";
import passport from "../configs/passport-config";
import {AuthController} from "../controllers/AuthController";

const router = Router();
const authController = new AuthController();

router.post('/login/password', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
}));

router.post('/signup', authController.signUp);

export default router;
