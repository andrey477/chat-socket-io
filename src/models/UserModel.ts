import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UserRole} from "../enums/userRole";

@Entity()
export class UserModel {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	password: string;

	@Column()
	email: string;

	@Column({
		type: 'simple-array',
		enum: UserRole,
		default: [UserRole.USER]
	})
	role: UserRole[];
}
