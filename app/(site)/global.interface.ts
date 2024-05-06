// ---------- CoinSelect component ----------

import { Dispatch, SetStateAction } from 'react';

export interface ICoinSelectValues {
	currentMainCoin: string;
	setCurrentMainCoin: Dispatch<SetStateAction<string>>;
	currentSecondaryCoin: string;
	setCurrentSecondaryCoin: Dispatch<SetStateAction<string>>;
}

// ---------- connect page ----------

export interface ICoinInstance {
	protocol: string;
	type: string;
	port: number;
	backends: string[];
	shareDiff?: number;
}

// ---------- user credentials ----------

export interface IGetUserCredentialsResponse {
	email: string;
	has2fa: boolean;
	isActive: boolean;
	isReadOnly: boolean;
	login: string;
	name: string;
	registrationDate: number;
	status: string;
}

// ---------- user stats history ----------

export interface IUserStatsHistoryPayload {
	coin: string;
	groupByInterval: number;
	id: string;
	sessionId: string;
	timeFrom: number;
}

export interface IUserStatsHistoryResponse {
	currentTime: number;
	powerMultLog10: number;
	powerUnit: string;
	stats: [];
	status: string;
}

export interface IUserStatsHistoryInstance {
	name: string;
	power: number;
	shareRate: number;
	shareWork: number;
	time: number;
}
