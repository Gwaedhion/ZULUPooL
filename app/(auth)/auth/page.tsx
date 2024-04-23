'use client';
import { FormEvent, useState } from 'react';
import styles from './page.module.css';
import cn from 'classnames';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { IUserLoginPayload } from './auth.interface';
import axios from 'axios';
import { API } from '@/app/api';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

export default function Auth() {
	const router = useRouter();

	const [authState, setAuthState] = useState('sign-in');

	const [loginValues, setLoginValues] = useState<IUserLoginPayload>({
		login: '',
		password: '',
		totp: '',
	});

	const loginPayload = {
		login: loginValues.login,
		password: loginValues.password,
		totp: loginValues.totp,
	};

	const tryToLogin = async () => {
		try {
			await axios
				.post(API.user.userLogin, JSON.stringify(loginPayload))
				.then((res) => {
					sessionStorage.setItem('sessionID', res.data.sessionid);
					setCookie('isReadOnly', res.data.isReadOnly);
					if (res.data.status == 'ok') {
						router.push('/');
					}
				});
		} catch (error) {
			alert(error);
		}
	};

	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>
				<div className={styles.box}>
					<div className={styles.authButtons}>
						<div className={styles.buttonContainer}>
							<h3 className={styles.title}>
								Already have an account?
							</h3>
							<Button
								className={styles.button}
								type="default"
								size="large"
								onClick={() => setAuthState('sign-in')}
							>
								Sign In
							</Button>
						</div>
						<div className={styles.buttonContainer}>
							<h3 className={styles.title}>
								Don&apos;t have an account?
							</h3>
							<Button
								className={styles.button}
								type="default"
								size="large"
								onClick={() => setAuthState('sign-up')}
							>
								Sign Up
							</Button>
						</div>
					</div>
					{authState == 'sign-in' && (
						<Form className={styles.form}>
							<span className={styles.label}>Login</span>
							<Input
								maxLength={64}
								className={styles.input}
								type="text"
								placeholder="Login"
								id="login"
								size="large"
								onChange={(event) => {
									setLoginValues({
										...loginValues,
										login: event.target.value,
									});
								}}
							/>
							<span className={styles.label}>Password</span>
							<Input.Password
								required
								minLength={10}
								maxLength={64}
								className={styles.input}
								type="password"
								placeholder="Password"
								id="password"
								size="large"
								onChange={(event) => {
									setLoginValues({
										...loginValues,
										password: event.target.value,
									});
								}}
							/>
							<span className={styles.label}>2fa code</span>
							<Input
								required
								maxLength={64}
								className={styles.input}
								type="text"
								id="totp"
								placeholder="OTP (option)"
								size="large"
								onChange={(event) => {
									setLoginValues({
										...loginValues,
										totp: event.target.value,
									});
								}}
							/>
							<Button
								className={styles.resetButton}
								type="link"
								onClick={() => setAuthState('change-password')}
							>
								Forgot password?
							</Button>
							<Input
								value={'Login'}
								className={cn(
									styles.button,
									styles.submitButton
								)}
								size="large"
								type="submit"
								onClick={() => tryToLogin()}
							/>
						</Form>
					)}
					{authState == 'sign-up' && (
						<Form className={styles.form}>
							<span className={styles.label}>Login</span>
							<Input
								className={styles.input}
								type="text"
								placeholder="Login"
								size="large"
							/>
							<span className={styles.label}>Public name</span>
							<Input
								className={styles.input}
								type="text"
								placeholder="Public name"
								size="large"
							/>
							<span className={styles.label}>Password</span>
							<Input
								className={styles.input}
								type="text"
								placeholder="Password"
								size="large"
							/>
							<span className={styles.label}>E-mail</span>
							<Input
								className={styles.input}
								type="text"
								placeholder="E-mail"
								size="large"
							/>
							<Button
								className={cn(
									styles.button,
									styles.submitButton
								)}
								size="large"
								type="primary"
							>
								Register
							</Button>
						</Form>
					)}
					{authState == 'change-password' && (
						<Form className={styles.form}>
							<span className={styles.label}>Login</span>
							<Input
								className={styles.input}
								type="text"
								placeholder="Login"
								size="large"
							/>
							<Button
								className={cn(
									styles.button,
									styles.submitButton
								)}
								size="large"
								type="primary"
							>
								Send link
							</Button>
						</Form>
					)}
				</div>
			</div>
		</main>
	);
}
