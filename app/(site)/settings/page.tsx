'use client';
import styles from './page.module.css';
import cn from 'classnames';
import { Button, ConfigProvider, Form, Input } from 'antd';
import { useState } from 'react';

export default function SettingsPage(): JSX.Element {
	const [settings, setSettings] = useState('payment');

	return (
		<div className={styles.pageWrapper}>
			<h3 className={styles.title}>Settings</h3>
			<div className={styles.settingsContainer}>
				<div
					className={cn(styles.paymentSettings, {
						[styles.paymentSettings_active]: settings == 'payment',
					})}
				>
					<Button
						className={cn(styles.settingsButton, {
							[styles.settingsButton_active]:
								settings == 'payment',
						})}
						type="link"
						onClick={() => setSettings('payment')}
					>
						Payment Settings
					</Button>
				</div>
				<div
					className={cn(styles.decoration, {
						[styles.decoration_payment]: settings == 'payment',
						[styles.decoration_account]: settings == 'account',
					})}
				></div>
				<div
					className={cn(styles.paymentSettings, {
						[styles.paymentSettings_active]: settings == 'account',
					})}
				>
					<Button
						className={cn(styles.settingsButton, {
							[styles.settingsButton_active]:
								settings == 'account',
						})}
						type="link"
						onClick={() => setSettings('account')}
					>
						Account Settings
					</Button>
				</div>
			</div>
			<div className={styles.formContainer}>
				<ConfigProvider
					theme={{
						components: {
							Form: {
								labelColor: '#fff',
							},
						},
					}}
				>
					{settings == 'payment' && (
						<Form className={styles.form} layout="vertical">
							<Form.Item
								className={styles.formItem}
								label="Payment address:"
							>
								<Input className={styles.input} />
							</Form.Item>
							<Form.Item
								className={styles.formItem}
								label="Automatic payout threshold:"
							>
								<Input className={styles.input} />
							</Form.Item>
						</Form>
					)}
				</ConfigProvider>
			</div>
		</div>
	);
}
