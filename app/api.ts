export const API = {
	admin: {
		backend: {
			backendQueryCoins:
				process.env.NEXT_PUBLIC_ADMIN + '/api/backendQueryCoins',
			backendQueryUserStats:
				process.env.NEXT_PUBLIC_ADMIN + '/api/backendQueryUserStats',
			backendQueryUserStatsHistory:
				process.env.NEXT_PUBLIC_ADMIN +
				'/api/backendQueryUserStatsHistory',
			backendQueryPoolStats:
				process.env.NEXT_PUBLIC_ADMIN + '/api/backendQueryPoolStats',
			backendQueryPoolStatsHistory:
				process.env.NEXT_PUBLIC_ADMIN +
				'/api/backendQueryPoolStatsHistory',
			backendQueryPayouts:
				process.env.NEXT_PUBLIC_ADMIN + '/api/backendQueryPayouts',
			backendQueryProfitSwitchCoeff:
				process.env.NEXT_PUBLIC_ADMIN +
				'/api/backendQueryProfitSwitchCoeff',
			backendUpdateProfitSwitchCoeff:
				process.env.NEXT_PUBLIC_ADMIN +
				'/api/backendUpdateProfitSwitchCoeff',
			backendPoolLuck:
				process.env.NEXT_PUBLIC_ADMIN + '/api/backendPoolLuck',
			backendQueryWorkerStatsHistory:
				process.env.NEXT_PUBLIC_ADMIN +
				'/api/backendQueryWorkerStatsHistory',
			backendQueryUserBalance:
				process.env.NEXT_PUBLIC_ADMIN + '/api/backendQueryUserBalance',
			backendQueryFoundBlocks:
				process.env.NEXT_PUBLIC_ADMIN + '/api/backendQueryFoundBlocks',
		},
		user: {
			userGetSettings:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userGetSettings',
			userGetCredentials:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userGetCredentials',
			userEnumerateAll:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userEnumerateAll',
			userEnumerateFeePlan:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userEnumerateFeePlan',
			instanceEnumerateAll:
				process.env.NEXT_PUBLIC_ADMIN + '/api/instanceEnumerateAll',
			userUpdateSettings:
				process.env.NEXT_PUBLIC_ADMIN + `/api/userUpdateSettings`,
			userActivate2faInitiate:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userActivate2faInitiate',
			userDeactivate2faInitiate:
				process.env.NEXT_PUBLIC_ADMIN +
				'/api/userDeactivate2faInitiate',
			userChangePasswordForce:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userChangePasswordForce',
			userUpdatePersonalFee:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userUpdatePersonalFee',
			userChangePassword:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userChangePassword',
			userUpdateFeePlan:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userUpdateFeePlan',
			userChangeFeePlan:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userChangeFeePlan',
			userResendEmail:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userResendEmail',
			userAction: process.env.NEXT_PUBLIC_ADMIN + '/api/userAction',
			userUpdateCredentials:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userUpdateCredentials',
			userGetFeePlan:
				process.env.NEXT_PUBLIC_ADMIN + '/api/userGetFeePlan',
		},
		auth: {
			userCreate: process.env.NEXT_PUBLIC_ADMIN + '/api/userCreate',
			userLogin: process.env.NEXT_PUBLIC_ADMIN + '/api/userLogin',
			userLogout: process.env.NEXT_PUBLIC_ADMIN + '/api/userLogout',
			userChangePasswordInitiate:
				process.env.NEXT_PUBLIC_ADMIN +
				'/api/userChangePasswordInitiate',
		},
	},
	user: {
		backend: {
			backendQueryCoins:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/backendQueryCoins',
			backendQueryPayouts:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/backendQueryPayouts',
			backendQueryPoolStatsHistory:
				process.env.NEXT_PUBLIC_DOMAIN +
				'/api/backendQueryPoolStatsHistory',
			backendQueryUserStats:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/backendQueryUserStats',
			backendQueryUserStatsHistory:
				process.env.NEXT_PUBLIC_DOMAIN +
				'/api/backendQueryUserStatsHistory',
			backendQueryFoundBlocks:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/backendQueryFoundBlocks',
			backendUpdateProfitSwitchCoeff:
				process.env.NEXT_PUBLIC_DOMAIN +
				'/api/backendUpdateProfitSwitchCoeff',
			backendQueryProfitSwitchCoeff:
				process.env.NEXT_PUBLIC_DOMAIN +
				'/api/backendQueryProfitSwitchCoeff',
			backendPoolLuck:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/backendPoolLuck',
			backendQueryWorkerStatsHistory:
				process.env.NEXT_PUBLIC_DOMAIN +
				'/api/backendQueryWorkerStatsHistory',
			backendQueryPoolStats:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/backendQueryPoolStats',
			backendQueryUserBalance:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/backendQueryUserBalance',
		},
		user: {
			userGetSettings:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userGetSettings',
			userGetCredentials:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userGetCredentials',
			userEnumerateAll:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userEnumerateAll',
			instanceEnumerateAll:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/instanceEnumerateAll',
			userUpdateSettings:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userUpdateSettings',
			userActivate2faInitiate:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userActivate2faInitiate',
			userDeactivate2faInitiate:
				process.env.NEXT_PUBLIC_DOMAIN +
				'/api/userDeactivate2faInitiate',
			userChangePasswordForce:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userChangePasswordForce',
			userUpdatePersonalFee:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userUpdatePersonalFee',
			userChangePassword:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userChangePassword',
			userUpdateFeePlan:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userUpdateFeePlan',
			userChangeFeePlan:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userChangeFeePlan',
			userCreate: process.env.NEXT_PUBLIC_DOMAIN + '/api/userCreate',
			userResendEmail:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userResendEmail',
			userAction: process.env.NEXT_PUBLIC_DOMAIN + '/api/userAction',
			userUpdateCredentials:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userUpdateCredentials',
			userEnumerateFeePlan:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userEnumerateFeePlan',
			userGetFeePlan:
				process.env.NEXT_PUBLIC_DOMAIN + '/api/userGetFeePlan',
		},
		auth: {
			userLogin: process.env.NEXT_PUBLIC_DOMAIN + '/api/userLogin',
			userLogout: process.env.NEXT_PUBLIC_DOMAIN + '/api/userLogout',
			userCreate: process.env.NEXT_PUBLIC_DOMAIN + '/api/userCreate',
			userChangePasswordInitiate:
				process.env.NEXT_PUBLIC_DOMAIN +
				'/api/userChangePasswordInitiate',
		},
	},
};
