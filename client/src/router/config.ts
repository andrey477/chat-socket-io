import {Route} from "../types";
import {JoinRoomPage} from "../pages/JoinRoomPage";
import {ChatPage} from "../pages/ChatPage";
import {SignUpPage} from "../pages/SignUpPage";
import {LoginPage} from "../pages/LoginPage";

export const routes: Route[] = [
	{
		path: '/signup',
		exact: true,
		component: SignUpPage,
	},
	{
		path: '/login',
		exact: true,
		component: LoginPage,
	},
	{
		path: '/join-room',
		exact: true,
		component: JoinRoomPage,
	},
	{
		path: '/chat',
		exact: true,
		component: ChatPage,
	},
]
