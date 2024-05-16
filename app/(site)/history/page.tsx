'use client';
import CoinSelect from '@/components/CoinSelect/CoinSelect';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import axios from 'axios';
import { API } from '@/app/api';
import {
	IGetUserCredentialsResponse,
	IUserStatsHistoryInstance,
	IUserStatsHistoryPayload,
	IUserStatsHistoryResponse,
} from '../global.interface';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

export default function HistoryPage(): JSX.Element {
	const [currentMainCoin, setCurrentMainCoin] = useState('sha256');
	const [currentSecondaryCoin, setCurrentSecondaryCoin] = useState('BTC');
	const [userCredentials, setUserCredentials] =
		useState<IGetUserCredentialsResponse>();
	const [userStatsHistory, setUserStatsHistory] =
		useState<IUserStatsHistoryResponse>();

	const userSession = {
		id: sessionStorage.getItem('sessionID'),
		sessionId: sessionStorage.getItem('sessionID'),
	};

	const getUserCredentials = async () => {
		if (sessionStorage.getItem('sessionId')?.length !== 0) {
			try {
				await axios
					.post(
						API.user.user.userGetCredentials,
						JSON.stringify(userSession)
					)
					.then((res) => {
						setUserCredentials(res.data);
						console.log('setUserCredentials');
					})
					.then(() => {
						console.log('getUserStatsHistory');
						getUserStatsHistory();
					});
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		getUserCredentials();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getUserStatsHistory = async () => {
		let userStatsPayload: IUserStatsHistoryPayload = {
			coin: currentSecondaryCoin,
			groupByInterval: 86400,
			id: userSession.id,
			sessionId: userSession.id,
			timeFrom: userCredentials?.registrationDate,
		};
		try {
			await axios
				.post(
					API.user.backend.backendQueryPoolStatsHistory,
					JSON.stringify(userStatsPayload)
				)
				.then((res) => setUserStatsHistory(res.data));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserStatsHistory();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userCredentials]);

	useEffect(() => {
		getUserStatsHistory();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSecondaryCoin]);

	let dataForTable: IUserStatsHistoryInstance[] | undefined =
		userStatsHistory?.stats;

	return (
		<div className={styles.pageWrapper}>
			<CoinSelect
				currentMainCoin={currentMainCoin}
				setCurrentMainCoin={setCurrentMainCoin}
				currentSecondaryCoin={currentSecondaryCoin}
				setCurrentSecondaryCoin={setCurrentSecondaryCoin}
			/>
			<div className={styles.tableContainer}>
				<h1 className={styles.pageTitle}>History</h1>
				<DataTable
					className={styles.table}
					value={dataForTable}
					paginator
					rows={35}
					sortField="time"
					sortOrder={-1}
				>
					<Column
						className={styles.column}
						field={'time'}
						header={'Date'}
						sortable
						body={(rowData) => (
							<>
								{new Date(
									rowData.time * 1000
								).toLocaleDateString(`${navigator.language}`, {
									day: 'numeric',
									month: 'numeric',
									year: '2-digit',
								})}
							</>
						)}
					></Column>
					<Column
						className={styles.column}
						field={'shareRate'}
						header={'Share rate'}
						sortable
					></Column>
					<Column
						className={styles.column}
						field={'power'}
						header={'Hashrate'}
						sortable
						body={(rowData) => (
							<>
								{rowData.power > 1000
									? rowData.power < 1_000_000
										? `${(rowData.power / 1_000).toFixed(
												3
										  )} GH/s`
										: rowData.power < 1_000_000_000
										? `${(
												rowData.power / 1_000_000
										  ).toFixed(3)} TH/s`
										: rowData.power < 1_000_000_000_000
										? `${(
												rowData.power / 1_000_000_000
										  ).toFixed(3)} PH/s`
										: rowData.power < 1_000_000_000_000_000
										? `${(
												rowData.power /
												1_000_000_000_000
										  ).toFixed(3)} EH/s`
										: rowData.power <
										  1_000_000_000_000_000_000
										? `${(
												rowData.power /
												1_000_000_000_000_000
										  ).toFixed(3)} ZH/s`
										: `Not found`
									: 0}
							</>
						)}
					></Column>
					<Column
						className={styles.column}
						field={'shareWork'}
						header={'Accepted difficulty'}
						sortable
						body={(rowData) =>
							rowData.shareWork > 0
								? (rowData.shareWork / 1000000).toFixed(3)
								: 0
						}
					></Column>
				</DataTable>
			</div>
		</div>
	);
}
