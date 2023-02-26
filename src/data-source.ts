import {DataSource} from "typeorm";
import {UserModel} from "./models/UserModel";
import {config} from "./utils/config";

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
})
