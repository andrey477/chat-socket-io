import {makeAutoObservable} from "mobx";
import {User} from "../types/user";

class UserStore {
	user: User.Data | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	setUser(user: User.Data) {
		this.user = user;
	}

	clearUser() {
		this.user = null;
	}
}

export default new UserStore();
