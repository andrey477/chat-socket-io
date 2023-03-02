import {ReactNode} from "react";

export interface IMessage {
	username: string;
	text: string;
}

export interface Route {
	exact: boolean;
	path: string;
	component: ReactNode;
	secured: boolean;
}
