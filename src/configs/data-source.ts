import {DataSource} from "typeorm";
import {UserModel} from "../models/UserModel";
import {config} from "./config";
import {Pool} from "pg";

export const database = new DataSource({
	type: "postgres",
	host: config.db_host,
	port: config.db_port,
	username: config.db_username,
	password: config.db_password,
	database: config.db_name,
	synchronize: true,
	logging: true,
	entities: [UserModel],
	subscribers: [],
	migrations: [],
});

export const pool = new Pool({
	user: config.db_username,
	password: config.db_password,
	host: config.db_host,
	port: config.db_port,
	database: config.db_name
});
