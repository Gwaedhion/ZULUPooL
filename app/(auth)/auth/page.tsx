'use client';
import { useState } from 'react';
import styles from './page.module.css';
import cn from 'classnames';
import { Button, ConfigProvider, Form, Input } from 'antd';
import { IUserLoginPayload, IUserSignUpPayload } from './auth.interface';
import axios from 'axios';
import { API } from '@/app/api';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import validator from 'validator';
import Image from 'next/image';
import { ANIMAL_NAMES, ANIMAL_ADJECTIVES } from '../../usernameGenerator';

export default function Auth() {
	const router = useRouter();

	const [authState, setAuthState] = useState('sign-in');

	// ---------- SIGN IN ----------
	const [signInValues, setSignInValues] = useState<IUserLoginPayload>({
		login: '',
		password: '',
		totp: '',
	});

	const signInPayload = {
		login: signInValues.login,
		password: signInValues.password,
		totp: signInValues.totp,
	};

	const [signInErrorState, setSignInErrorState] = useState<unknown>();

	const tryToSignIn = async () => {
		try {
			if (
				validator.isAscii(signInPayload.login) &&
				validator.isAscii(signInPayload.password) &&
				validator.isAscii(signInPayload.totp)
			) {
				await axios
					.post(
						API.user.auth.userLogin,
						JSON.stringify(signInPayload)
					)
					.then((res) => {
						sessionStorage.setItem('sessionID', res.data.sessionid);
						setCookie('isReadOnly', res.data.isReadOnly);
						if (res.data.status == 'ok') {
							router.push('/');
						}
					});
			}
		} catch (error) {
			setSignInErrorState(error);
			console.log(error);
		}
	};

	// ---------- SIGN UP ----------

	const [signUpValues, setSignUpValues] = useState<IUserSignUpPayload>({
		email: '',
		login: '',
		name: '',
		password: '',
	});

	const signUpPayload = {
		email: signUpValues.email,
		login: signUpValues.login,
		name: signUpValues.name,
		password: signUpValues.password,
	};

	const [signUpErrorState, setSignUpErrorState] = useState<unknown>();

	const tryToSignUp = async () => {
		try {
			if (signUpPayload.name === '') {
				generatePublicName();
			}
			if (
				validator.isAscii(signUpPayload.login) &&
				validator.isAscii(signUpPayload.name) &&
				validator.isAscii(signUpPayload.password) &&
				validator.isEmail(signUpPayload.email)
			) {
				await axios.post(
					API.user.auth.userCreate,
					JSON.stringify(signUpPayload)
				);
				setTimeout(() => {
					router.push('/');
				}, 1000);
			}
		} catch (error) {
			setSignUpErrorState(error);
			console.log(error);
		}
	};

	// ---------- PUBLIC_NAME GENERATOR ----------

	let [publicName, setPublicName] = useState('');

	const generatePublicName = () => {
		let randomAnimalName = Math.floor(Math.random() * ANIMAL_NAMES.length);
		let randomAnimalAdjective = Math.floor(
			Math.random() * ANIMAL_ADJECTIVES.length
		);
		let name = ANIMAL_NAMES[randomAnimalName];
		let adjective = ANIMAL_ADJECTIVES[randomAnimalAdjective];
		let randomName = adjective + ' ' + name;
		setPublicName(randomName);
	};

	// ---------- FORGOT PASSWORD ----------

	const [passChangeLogin, setPassChangeLogin] = useState({ login: '' });

	const requestPasswordChange = async () => {
		try {
			if (validator.isAscii(passChangeLogin.login)) {
				await axios.post(
					API.user.auth.userChangePasswordInitiate,
					JSON.stringify(passChangeLogin)
				);
				setTimeout(() => {
					router.push('/');
				}, 1000);
			}
		} catch (error) {
			console.log(error);
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
							<ConfigProvider
								theme={{
									components: {
										Button: {
											defaultHoverBg: '#238aff',
											defaultHoverColor: '#fff',
											defaultActiveBg: '#107eff',
											defaultActiveColor: '#fff',
										},
									},
								}}
							>
								<Button
									className={cn(styles.button, {
										[styles.button_active]:
											authState == 'sign-in',
									})}
									type="default"
									size="large"
									onClick={() => setAuthState('sign-in')}
								>
									Sign In
								</Button>
							</ConfigProvider>
						</div>
						<div className={styles.buttonContainer}>
							<h3 className={styles.title}>
								Don&apos;t have an account?
							</h3>
							<ConfigProvider
								theme={{
									components: {
										Button: {
											defaultHoverBg: '#238aff',
											defaultHoverColor: '#fff',
											defaultActiveBg: '#107eff',
											defaultActiveColor: '#fff',
										},
									},
								}}
							>
								<Button
									className={cn(styles.button, {
										[styles.button_active]:
											authState == 'sign-up',
									})}
									type="default"
									size="large"
									onClick={() => {
										setAuthState('sign-up');
										generatePublicName();
									}}
								>
									Sign Up
								</Button>
							</ConfigProvider>
						</div>
					</div>
					{authState == 'sign-in' && (
						<Form className={styles.form}>
							<span className={styles.label}>Login</span>
							<Input
								required
								maxLength={64}
								className={styles.input}
								type="text"
								placeholder="Login"
								id="login"
								size="large"
								onChange={(event) => {
									setSignInValues({
										...signInValues,
										login: event.target.value,
									});
								}}
							/>
							<span className={styles.label}>Password</span>
							<Input
								required
								minLength={10}
								maxLength={64}
								className={styles.input}
								type="password"
								placeholder="Password"
								id="password"
								size="large"
								onChange={(event) => {
									setSignInValues({
										...signInValues,
										password: event.target.value,
									});
								}}
							/>
							<span className={styles.label}>2fa code</span>
							<Input
								maxLength={64}
								className={styles.input}
								type="text"
								id="totp"
								placeholder="OTP (option)"
								size="large"
								onChange={(event) => {
									setSignInValues({
										...signInValues,
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
								onClick={() => tryToSignIn()}
							/>
						</Form>
					)}
					{authState == 'sign-up' && (
						<Form className={styles.form}>
							<span className={styles.label}>Login</span>
							<Input
								className={styles.input}
								type="text"
								id="Login"
								placeholder="Login"
								size="large"
								onChange={(event) => {
									setSignUpValues({
										...signUpValues,
										login: event.target.value,
									});
								}}
							/>
							<div className={styles.labelContainer}>
								<span className={styles.label}>
									Public name
								</span>
								<Button
									className={styles.generatorButton}
									shape="circle"
									type="primary"
									size="small"
									onClick={() => generatePublicName()}
								>
									<Image
										className={styles.icon}
										src={'/repeat.svg'}
										width={10}
										height={10}
										alt="name generator icon"
									/>
								</Button>
							</div>
							<Input
								className={styles.input}
								type="text"
								id="Public name"
								placeholder="Public name"
								size="large"
								value={publicName}
								onChange={(e) => {
									setPublicName(e.target.value);
									setSignUpValues({
										...signUpValues,
										login: e.target.value,
									});
								}}
							/>
							<span className={styles.label}>Password</span>
							<Input
								className={styles.input}
								type="text"
								id="Password"
								placeholder="Password"
								size="large"
								onChange={(event) => {
									setSignUpValues({
										...signUpValues,
										password: event.target.value,
									});
								}}
							/>
							<span className={styles.label}>E-mail</span>
							<Input
								className={styles.input}
								type="text"
								id="Email"
								placeholder="E-mail"
								size="large"
								onChange={(event) => {
									setSignUpValues({
										...signUpValues,
										email: event.target.value,
									});
								}}
							/>
							<Input
								className={cn(
									styles.button,
									styles.submitButton
								)}
								size="large"
								type="primary"
								value={'Register'}
								onClick={() => {
									tryToSignUp();
								}}
							/>
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
								onChange={(e) =>
									setPassChangeLogin({
										login: e.target.value,
									})
								}
							/>
							<Button
								className={cn(
									styles.button,
									styles.submitButton
								)}
								size="large"
								type="primary"
								onClick={() => requestPasswordChange()}
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
