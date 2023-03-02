import {Route} from "../types";
import {JoinRoomPage} from "../pages/JoinRoomPage";
import {ChatPage} from "../pages/ChatPage";
import {SignUpPage} from "../pages/SignUpPage";
import {LoginPage} from "../pages/LoginPage";

export const routes: Route[] = [
	{
		path: '/signup',
		exact: true,
		component: <SignUpPage/>,
		secured: false,
	},
	{
		path: '/login',
		exact: true,
		component: <LoginPage/>,
		secured: false,
	},
	{
		path: '/join-room',
		exact: true,
		component: <JoinRoomPage/>,
		secured: true,
	},
	{
		path: '/chat',
		exact: true,
		component: <ChatPage/>,
		secured: true,
	},
]
