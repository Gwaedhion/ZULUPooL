import CoinSelect from '@/components/CoinSelect/CoinSelect';
import styles from './page.module.css';

export default function StartWorkPage(): JSX.Element {
	return (
		<div className={styles.pageWrapper}>
			<CoinSelect className={styles.select} />
		</div>
	);
}
