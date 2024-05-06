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

	useEffect(() => {
		const getUserCredentials = async () => {
			if (sessionStorage.getItem('sessionId')?.length != 0) {
			}
			await axios
				.post(
					API.user.user.userGetCredentials,
					JSON.stringify(userSession)
				)
				.then((res) => setUserCredentials(res.data));
		};
		getUserCredentials();
	}, []);

	let userStatsPayload: IUserStatsHistoryPayload = {
		coin: currentSecondaryCoin,
		groupByInterval: 86400,
		id: userSession.id!,
		sessionId: userSession.id!,
		timeFrom: userCredentials?.registrationDate!,
	};

	useEffect(() => {
		const getUserStatsHistory = async () => {
			await axios
				.post(
					API.user.backend.backendQueryPoolStatsHistory,
					JSON.stringify(userStatsPayload)
				)
				.then((res) => setUserStatsHistory(res.data));
			getUserStatsHistory();
		};
	}, []);

	const dataForTable: IUserStatsHistoryInstance[] | undefined =
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
				<DataTable
					className={styles.table}
					value={dataForTable}
					showGridlines
					paginator
					rows={20}
					rowsPerPageOptions={[20, 50, 100, 200, 500, 1000]}
					totalRecords={1000}
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
					/>
					<Column
						className={styles.column}
						field={'shareRate'}
						header={'Share rate'}
						sortable
					/>
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
					/>
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
					/>
				</DataTable>
			</div>
		</div>
	);
}
