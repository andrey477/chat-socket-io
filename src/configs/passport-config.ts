import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";
import {database} from "./data-source";
import {UserModel} from "../models/UserModel";
import bcrypt from "bcrypt";

passport.use(new LocalStrategy(async (username, password, cb) => {
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

export default passport;
