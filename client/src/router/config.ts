import {Route} from "../types";
import {LoginPage} from "../pages/LoginPage";
import {ChatPage} from "../pages/ChatPage";

export const routes: Route[] = [
	{
		path: '/login',
		exact: true,
		component: LoginPage
	},
	{
		path: '/chat',
		exact: true,
		component: ChatPage
	},
]
