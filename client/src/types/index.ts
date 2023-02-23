import {FunctionComponent} from "react";

export interface IMessage {
	username: string;
	text: string;
}

export interface Route {
	exact: boolean;
	path: string;
	component: FunctionComponent;
}
