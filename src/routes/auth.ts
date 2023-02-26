import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {database} from "../data-source";
import {UserModel} from "../models/UserModel";
import bcrypt from 'bcrypt';
import {Router} from "express";

passport.use(new LocalStrategy(async (username, password, cb) => {
	console.log('passport')
	try {
		const user = await database.manager.findOne(UserModel, {
			where: { username }
		});

		if (!user) {
			return cb(null, false, { message: 'Incorrect username or password.'});
		}

		bcrypt.compare(password, user.password, (err, same) => {
			if (err) { return cb(err); }
			if (!same) {
				return cb(null, false, { message: 'Incorrect username or password.' });
			}
			return cb(null, user);
		});
	} catch (error) {
		console.error(error);
	}
}));

passport.serializeUser(function(user, cb) {
	process.nextTick(function() {
		// @ts-ignore
		cb(null, { id: user.id, username: user.username });
	});
});

passport.deserializeUser(function(user: Express.User, cb) {
	process.nextTick(function() {
		// @ts-ignore
		return cb(null, user);
	});
});

const router = Router();

router.post('/login/password', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
}));

router.post('/signup', async (req, res, next) => {
	const { username, password, email } = req.body;
	const hashedPassword = bcrypt.hashSync(password, 10);
	const user = new UserModel();
	user.username = username;
	user.password = hashedPassword;
	user.email = email;
	const savedUser = await database.manager.save(user);
	req.login({
		id: savedUser.id,
		username: savedUser.username
	}, (err) => {
		if (err) { return next(err); }
		res.redirect('/');
	});
});

export default router;
