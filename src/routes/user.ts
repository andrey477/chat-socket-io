import {Router} from "express";
import {UserController} from "../controllers/UserController";

const router = Router();

router.get('/current', UserController.current);

export default router;
