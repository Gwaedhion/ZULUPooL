export interface IUserLoginPayload {
	login: string;
	password: string;
	totp: string;
}

export interface IUserLoginResponse {
	status: string;
	sessionid: string;
	isReadOnly: boolean;
}

export interface IUserSignUpPayload {
	email: string;
	login: string;
	name: string;
	password: string;
}

export interface IUserSession {
	id: string | null;
	sessionId: string | null;
}

export interface IUserData {
	email: string | undefined;
	has2fa: boolean | undefined;
	isActive: boolean | undefined;
	isReadOnly: boolean | undefined;
	login: string | undefined;
	name: string | undefined;
	registrationDate: number | undefined;
	status: string | undefined;
}
