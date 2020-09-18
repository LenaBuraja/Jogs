export interface IJog {
	id: number;
	date: number;
	time: number;
	distance: number;
	user_id: string;
}

export interface IUser {
	id: string;
	email: string;
	phone: string;
	role: string;
	first_name: string;
	last_name: string;
}

export interface IResponse<T> {
	error_message?: {
		error: string;
	} | string;
	response?: T;
	timestamp: number;
}
