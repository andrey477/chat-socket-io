import session from "express-session";
import {pool} from "../configs/data-source";
import ConnectPgSimple from "connect-pg-simple";

const PgStore = ConnectPgSimple(session);

export const sessionMiddleware = session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
	store: new PgStore({
		pool,
	}),
	cookie: {
		httpOnly: true,
		maxAge: 60 * 60 * 1000,
	}
});

export const wrap = (middleware: any) => (socket: any, next: any) => middleware(socket.request, {}, next);
