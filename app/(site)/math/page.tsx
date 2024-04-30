'use client';
import styles from './page.module.css';
import CoinIcon from '../../../public/math-page/info-icon.svg';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function RewardsPage(): JSX.Element {
	const router = useRouter();

	return (
		<div className={styles.pageWrapper}>
			<h3 className={styles.title}>REWARDS</h3>
			<h1 className={styles.subtitle}>You can work in PPDALN+ mode</h1>
			<p className={styles.subtext}>
				PPDALN+ (Pay Per Difficulty Accepted for Last N rounds + fee).
			</p>
			<div className={styles.infoContainer}>
				<div className={styles.box}>
					<CoinIcon className={styles.icon} />
					<p className={styles.text}>
						Under <span className={styles.styledText}>PPDALN+</span>{' '}
						mode, whenever a block is found, profits are calculated
						based on accepted difficulty miners contributed to{' '}
						<span className={styles.styledText}>ZULUPooL</span>™ in
						the last <span className={styles.styledText}>N</span>{' '}
						rounds. Meanwhile, miner fees will be allocated to
						miners, too. Accepted difficulty is calculated as the
						sum of all accepted valid jobs (shares) multiplied by
						the target of that job (share target).
					</p>
				</div>
				<div className={styles.box}>
					<p className={styles.text}>
						With <span className={styles.styledText}>PPDALN+</span>,
						miners&apos; payout is related to the blocks mined out.
						Therefore, miners may face unstable yields, but they
						will enjoy higher profits in the long term. If several
						coins are activated on the instance used (excluding coin
						merged), there is an automatic distribution of computing
						power between coins, based on our switching algorithm.
						In this mode, there may be more prolonged unstable
						yields, but the utilization of the hashrate occurs as
						efficiently as possible, which also has a positive
						effect for profits in the long term.
					</p>
				</div>
				<div className={styles.box}>
					<p className={styles.text}>
						The payment transaction network fee is{' '}
						<span className={styles.styledText}>
							deducted from the amount sent
						</span>{' '}
						. Using{' '}
						<span className={styles.styledText}>PPDALN+</span> mode
						you get{' '}
						<span className={styles.styledText}>96.25%</span> of the
						reward. +0.15%, if invited by our partners. Also, up to
						+ 0.15% income of referrals, (for our partners). Contact
						our Discord channel administrator to discuss potential
						partnerships.{' '}
						<span className={styles.styledText}>ETC: 99%</span> of
						the reward, including MeV.
					</p>
				</div>
				<div className={styles.contactsContainer}>
					<h3 className={styles.contactsTitle}>Contact Us</h3>
					<div className={styles.contactsItem}>
						<p className={styles.text}>
							Contact us if you need any help:
						</p>
						<Button
							className={styles.button}
							type="primary"
							onClick={() =>
								router.push(
									'https://discord.com/invite/ugsST2BptA'
								)
							}
						>
							Discord
						</Button>
					</div>
					<div className={styles.contactsItem}>
						<p className={styles.text}>E-mail:</p>
						<Button
							className={styles.button}
							type="primary"
							onClick={() => {
								navigator.clipboard.writeText(
									'pool@jsoncrypto.com'
								);
								alert('E-mail address copied to clipboard!');
							}}
						>
							pool@jsoncrypto.com
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
