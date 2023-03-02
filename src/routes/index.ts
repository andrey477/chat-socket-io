import {Router} from "express";
import authRouter from './auth';
import userRouter from './user';
import {ensureAuthenticated} from "../utils/auth";

const router = Router();

router.use('/auth', authRouter);
router.use('/user', ensureAuthenticated, userRouter)

export default router;
