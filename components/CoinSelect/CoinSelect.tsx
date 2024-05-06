'use client';
import { Button, Select } from 'antd';
import styles from './CoinSelect.module.css';
import { useEffect, useState } from 'react';
import { ICoinSelectValues } from '@/app/(site)/global.interface';
import cn from 'classnames';

const coinButtonsArr = [
	['BTC', 'BCHN', 'BSV', 'DGB.sha256', 'HTR', 'XEC', 'sha256'],
	['DGB.odo'],
	['DGB.qubit'],
	['LTC', 'DGB.scrypt', 'DOGE', 'scrypt'],
	['DGB.skein'],
	['XPM'],
];

export default function CoinSelect({
	currentMainCoin,
	setCurrentMainCoin,
	currentSecondaryCoin,
	setCurrentSecondaryCoin,
}: ICoinSelectValues): JSX.Element {
	const [mainCoin, setMainCoin] = useState('sha256');

	const [secondaryCoin, setSecondaryCoin] = useState('BTC');

	// Assign coin and subCoin values to parent variables.

	const handleMainCoin = () => {
		setCurrentMainCoin(mainCoin);
	};

	const handleSecondaryCoin = () => {
		setCurrentSecondaryCoin(secondaryCoin);
	};

	let chosenMain = mainCoin;
	let chosenSecondary = secondaryCoin;

	useEffect(() => {
		setCurrentMainCoin(chosenMain);
		setMainCoin(chosenMain);
	}, [chosenMain]);

	useEffect(() => {
		setCurrentSecondaryCoin(chosenSecondary);
		setSecondaryCoin(chosenSecondary);
	}, [chosenSecondary]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.selectContainer}>
				<Select
					className={styles.select}
					defaultValue={'sha256'}
					onChange={(e) => {
						setMainCoin(e);
						handleMainCoin();
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

			<div className={styles.coinButtonsContainer}>
				{mainCoin == 'sha256' && (
					<div className={styles.coinButtons}>
						{coinButtonsArr[0].map((item) => (
							<Button
								className={cn(styles.button, {
									[styles.active]: secondaryCoin == item,
								})}
								key={item}
								onClick={(e) => {
									e.preventDefault();
									setSecondaryCoin(item);
									handleSecondaryCoin();
								}}
							>
								{item}
							</Button>
						))}
					</div>
				)}
				{mainCoin == 'odocrypt' && (
					<div className={styles.coinButtons}>
						{coinButtonsArr[1].map((item) => (
							<Button
								className={cn(styles.button, {
									[styles.active]: secondaryCoin == item,
								})}
								key={item}
								onClick={(e) => {
									e.preventDefault();
									setSecondaryCoin(item);
									handleSecondaryCoin();
								}}
							>
								{item}
							</Button>
						))}
					</div>
				)}
				{mainCoin == 'qubit' && (
					<div className={styles.coinButtons}>
						{coinButtonsArr[2].map((item) => (
							<Button
								className={cn(styles.button, {
									[styles.active]: secondaryCoin == item,
								})}
								key={item}
								onClick={(e) => {
									e.preventDefault();
									setSecondaryCoin(item);
									handleSecondaryCoin();
								}}
							>
								{item}
							</Button>
						))}
					</div>
				)}
				{mainCoin == 'scrypt' && (
					<div className={styles.coinButtons}>
						{coinButtonsArr[3].map((item) => (
							<Button
								className={cn(styles.button, {
									[styles.active]: secondaryCoin == item,
								})}
								key={item}
								onClick={(e) => {
									e.preventDefault();
									setSecondaryCoin(item);
									handleSecondaryCoin();
								}}
							>
								{item}
							</Button>
						))}
					</div>
				)}
				{mainCoin == 'skein' && (
					<div className={styles.coinButtons}>
						{coinButtonsArr[4].map((item) => (
							<Button
								className={cn(styles.button, {
									[styles.active]: secondaryCoin == item,
								})}
								key={item}
								onClick={(e) => {
									e.preventDefault();
									setSecondaryCoin(item);
									handleSecondaryCoin();
								}}
							>
								{item}
							</Button>
						))}
					</div>
				)}
				{mainCoin == 'PrimePOW' && (
					<div className={styles.coinButtons}>
						{coinButtonsArr[5].map((item) => (
							<Button
								className={cn(styles.button, {
									[styles.active]: secondaryCoin == item,
								})}
								key={item}
								onClick={(e) => {
									e.preventDefault();
									setSecondaryCoin(item);
									handleSecondaryCoin();
								}}
							>
								{item}
							</Button>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
