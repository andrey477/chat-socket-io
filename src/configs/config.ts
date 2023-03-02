import dotenv from 'dotenv';
import {Config} from "../types";

dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

export const config: Config = {
	port: Number(process.env.PORT),
	db_host: process.env.DB_HOST,
	db_port: Number(process.env.DB_PORT),
	db_username: process.env.DB_USERNAME,
	db_password: process.env.DB_PASSWORD,
	db_name: process.env.DB_NAME,
};
