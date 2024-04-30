'use client';
import { ConfigProvider, Radio, Select } from 'antd';
import styles from './CoinSelect.module.css';
import { ICoinSelectProps } from './CoinSelect.props';
import { useEffect, useState } from 'react';

export default function CoinSelect({
	className,
	...props
}: ICoinSelectProps): JSX.Element {
	const darkThemeTextColor = 'rgb(219, 219, 219)';

	const [mainCoin, setMainCoin] = useState('');

	useEffect(() => {
		setMainCoin('sha256');
	}, []);

	return (
		<div className={styles.wrapper} {...props}>
			<div className={styles.selectContainer}>
				<Select
					className={styles.select}
					defaultValue={'sha256'}
					onChange={(e) => {
						setMainCoin(e);
						console.log(mainCoin);
					}}
				>
					<Select.Option value="sha256">sha256</Select.Option>
					<Select.Option value="odocrypt">odocrypt</Select.Option>
					<Select.Option value="qubit">qubit</Select.Option>
					<Select.Option value="scrypt">scrypt</Select.Option>
					<Select.Option value="skein">skein</Select.Option>
					<Select.Option value="PrimePOW">PrimePOW</Select.Option>
				</Select>
			</div>

			<div className={styles.radioGroupContainer}>
				{mainCoin == 'sha256' && (
					<div className={styles.radioContainer}>
						<Radio.Group
							className={styles.radioGroup}
							defaultValue={'BTC'}
						>
							<ConfigProvider
								theme={{
									components: {
										Radio: {
											colorText: darkThemeTextColor,
										},
									},
								}}
							>
								<Radio
									className={styles.radioButton}
									value={'BTC'}
								>
									BTC
								</Radio>
								<Radio
									className={styles.radioButton}
									value={'BCHN'}
								>
									BCHN
								</Radio>
								<Radio
									className={styles.radioButton}
									value={'BSV'}
								>
									BSV
								</Radio>
								<Radio
									className={styles.radioButton}
									value={'DGB.sha256'}
								>
									DGB.sha256
								</Radio>
								<Radio
									className={styles.radioButton}
									value={'HTR'}
								>
									HTR
								</Radio>
								<Radio
									className={styles.radioButton}
									value={'XEC'}
								>
									XEC
								</Radio>
							</ConfigProvider>
						</Radio.Group>
					</div>
				)}
			</div>
		</div>
	);
}
