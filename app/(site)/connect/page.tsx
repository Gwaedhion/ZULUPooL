'use client';
import styles from './page.module.css';
import axios from 'axios';
import CoinSelect from '@/components/CoinSelect/CoinSelect';
import { useEffect, useState } from 'react';
import { API } from '@/app/api';
import {
	ICoinInstance,
	IGetUserCredentialsResponse,
} from '../global.interface';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import CheckIcon from '../../../public/startwork-page/check-icon.svg';
import AlertIcon from '../../../public/startwork-page/alert-icon.svg';
import QuestionmarkIcon from '../../../public/startwork-page/questionmark-icon.svg';
import SupportIcon from '../../../public/startwork-page/support.svg';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function StartWorkPage(): JSX.Element {
	const router = useRouter();
	const [currentMainCoin, setCurrentMainCoin] = useState('sha256');
	const [currentSecondaryCoin, setCurrentSecondaryCoin] = useState('BTC');
	const [apiData, setApiData] = useState<ICoinInstance[] | undefined>([]);
	const [userCredentials, setUserCredentials] =
		useState<IGetUserCredentialsResponse>();

	const modifiedData: ICoinInstance[] = [];

	useEffect(() => {
		const getCoinInstances = async () => {
			try {
				await axios
					.post(API.user.user.instanceEnumerateAll)
					.then((res) => {
						setApiData(res.data.instances);
					});
			} catch (error) {
				console.log(error);
			}
		};
		getCoinInstances();
	}, []);

	const userSession = {
		id: sessionStorage.getItem('sessionID'),
		sessionId: sessionStorage.getItem('sessionID'),
	};

	const getUserCredentials = async () => {
		if (sessionStorage.getItem('sessionId')?.length != 0) {
			try {
				await axios
					.post(
						API.user.user.userGetCredentials,
						JSON.stringify(userSession)
					)
					.then((res) => setUserCredentials(res.data));
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		getUserCredentials();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const modifyApiData = () => {
		apiData?.map((item) => {
			item = {
				protocol: item.protocol,
				type: item.type,
				port: item.port,
				shareDiff: item.shareDiff,
				backends: Array(item.backends!.join(', ')),
			};
			modifiedData.push(item);
		});
		console.log(modifiedData);
	};

	modifyApiData();

	const tableDataArray = modifiedData.filter((item) =>
		item.backends![0].includes(currentSecondaryCoin)
	);

	const [rowData, setRowData] = useState<ICoinInstance>({
		protocol: 'stratum',
		type: 'BTC',
		port: 5010,
		backends: ['BTC, BCHN'],
		shareDiff: tableDataArray[0]?.shareDiff,
	});

	return (
		<div className={styles.pageWrapper}>
			<div className={styles.pageTop}>
				<CoinSelect
					currentMainCoin={currentMainCoin}
					setCurrentMainCoin={setCurrentMainCoin}
					currentSecondaryCoin={currentSecondaryCoin}
					setCurrentSecondaryCoin={setCurrentSecondaryCoin}
				/>
				<div className={styles.infoWrapper}>
					<div className={styles.tableContainer}>
						<h2 className={styles.tableTitle}>Still beta!</h2>
						<p className={styles.tableSubtitle}>
							We are still beta. Make sure you have a spare pool
							configured! Let us know if your device cannot
							connect or unstable.
						</p>
						<DataTable
							className={styles.table}
							value={tableDataArray}
							showGridlines
							selectionMode={'single'}
							onSelectionChange={(e) => setRowData(e.value)}
						>
							<Column
								className={styles.column}
								header="Protocol"
								field="protocol"
							/>
							<Column
								className={styles.column}
								header="Type"
								field="type"
							/>
							<Column
								className={styles.column}
								header="Port"
								field="port"
							/>
							<Column
								className={styles.column}
								header="Backends"
								field="backends"
							/>
							<Column
								className={styles.column}
								header="Difficulty"
								field="shareDiff"
							/>
						</DataTable>
					</div>
					<div className={styles.coinInfoContainer}>
						<h3 className={styles.coinInfoTitle}>
							To start work with{' '}
							<span className={styles.styledText}>
								{rowData.backends}
							</span>{' '}
							coins, configure your device to connect to our
							server:
						</h3>
						<p className={styles.coinInfoSubtitle}>
							<span className={styles.styledText}>
								{currentMainCoin}
							</span>
							.zulupool.com:
							<span className={styles.styledText}>
								{rowData?.port}
							</span>{' '}
							Username:{' '}
							<span className={styles.styledText}>
								{userCredentials?.name}
							</span>
							.any-worker-name-required Password:{' '}
							{`<not-an-empty-field-required>`}
						</p>
					</div>
					{currentMainCoin == 'sha256' && (
						<div className={styles.instanceInfoContainer}>
							<div className={styles.instanceInfo}>
								<CheckIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									AsicBoost enabled.
								</span>
							</div>
							<div className={styles.instanceInfo}>
								<CheckIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Instance is compatible with NiceHash.
								</span>
							</div>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with some Miningrigrentals rigs. You can use
									them at your own risk.
								</span>
							</div>
						</div>
					)}
					{currentMainCoin == 'odocrypt' && (
						<div className={styles.instanceInfoContainer}>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with NiceHash.
								</span>
							</div>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with some Miningrigrentals rigs. You can use
									them at your own risk.
								</span>
							</div>
						</div>
					)}
					{currentMainCoin == 'qubit' && (
						<div className={styles.instanceInfoContainer}>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with NiceHash.
								</span>
							</div>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with some Miningrigrentals rigs. You can use
									them at your own risk.
								</span>
							</div>
						</div>
					)}
					{currentMainCoin == 'scrypt' && (
						<div className={styles.instanceInfoContainer}>
							<div className={styles.instanceInfo}>
								<CheckIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Instance is compatible with NiceHash.
								</span>
							</div>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with some Miningrigrentals rigs. You can use
									them at your own risk.
								</span>
							</div>
						</div>
					)}
					{currentMainCoin == 'skein' && (
						<div className={styles.instanceInfoContainer}>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with NiceHash.
								</span>
							</div>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with some Miningrigrentals rigs. You can use
									them at your own risk.
								</span>
							</div>
						</div>
					)}
					{currentMainCoin == 'PrimePOW' && (
						<div className={styles.instanceInfoContainer}>
							<div className={styles.instanceInfo}>
								<CheckIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Instance is compatible with NiceHash.
								</span>
							</div>
							<div className={styles.instanceInfo}>
								<AlertIcon className={styles.icon} />
								<span className={styles.instanceInfo__text}>
									Unfortunately, instance is not compatible
									with some Miningrigrentals rigs. You can use
									them at your own risk.
								</span>
							</div>
						</div>
					)}
					<div className={styles.paymentsWrapper}>
						<div className={styles.paymentsContainer}>
							<div className={styles.titleContainer}>
								<QuestionmarkIcon className={styles.icon} />
								<h3 className={styles.paymentsTitle}>
									Payments
								</h3>
							</div>
							<p className={styles.paymentsText}>
								To receive payments, you need to configure the
								addresses and the threshold for payments for all
								backends which you are connecting to. There is
								no way to choose a particular coin for mining:
								switching between coins presented on the backend
								happens automatically based on our algo. In the
								case of Merged coins, mining is performed using
								all algorithms compatible with the presented
								merged coin.
							</p>
						</div>
						<div className={styles.paymentsContainer}>
							<div className={styles.titleContainer}>
								<SupportIcon className={styles.icon} />
								<h3 className={styles.paymentsTitle}>
									Support information
								</h3>
							</div>
							<p className={styles.paymentsText}>
								You can get support in{' '}
								<Button
									className={styles.paymentsButton}
									type="primary"
									onClick={() =>
										router.push(
											'https://discord.com/invite/ugsST2BptA'
										)
									}
								>
									Discord
								</Button>
								,
								<br /> or by email:{' '}
								<Button
									className={styles.paymentsButton}
									type="primary"
									onClick={() => {
										navigator.clipboard.writeText(
											'pool@jsoncrypto.com'
										);
										alert(
											'E-mail address copied to clipboard!'
										);
									}}
								>
									pool@jsoncrypto.com
								</Button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
