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
	protocol: string | undefined;
	type: string | undefined;
	port: number | undefined;
	backends: string[] | undefined;
	shareDiff?: number | undefined;
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
	id: string | null;
	sessionId: string | null;
	timeFrom: number | undefined;
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

export interface IPoolStatsHistoryInstance {
	name: string;
	power: number;
	shareRate: number;
	shareWork: number;
	time: number;
}
