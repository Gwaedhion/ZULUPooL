'use client';
import Image from 'next/image';
import styles from './Sidebar.module.css';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { useState } from 'react';
import Link from 'next/link';
import PoolHistoryIcon from '../../public/poolhistory-page/nav-icon.svg';
import RewardsIcon from '../../public/math-page/nav-icon.svg';
import StartWorkIcon from '../../public/startwork-page/nav-icon.svg';
import MonitoringIcon from '../../public/monitoring-page/nav-icon.svg';
import HistoryIcon from '../../public/history-page/nav-icon.svg';
import PayoutsIcon from '../../public/payouts-page/nav-icon.svg';
import SettingsIcon from '../../public/settings-page/nav-icon.svg';
import MenuIcon from '../../public/components-icons/sidebar-icons/menu.svg';
import LogoCollapsedIcon from '../../public/logo-collapsed.svg';
import LogoFullIcon from '../../public/logo-full.svg';
import SignInCollapsedIcon from '../../public/components-icons/sidebar-icons/login-icon-collapsed.svg';

const sidebarItems = [
	{
		id: 0,
		name: 'Pool history',
		href: '/history-pool',
		icon: <PoolHistoryIcon className={styles.navIcon} />,
	},
	{
		id: 1,
		name: 'Rewards',
		href: '/math',
		icon: <RewardsIcon className={styles.navIcon} />,
	},
	{
		id: 2,
		name: 'Start work',
		href: '/connect',
		icon: <StartWorkIcon className={styles.navIcon} />,
	},
	{
		id: 3,
		name: 'Monitoring',
		href: '/monitoring',
		icon: <MonitoringIcon className={styles.navIcon} />,
	},
	{
		id: 4,
		name: 'History',
		href: '/history',
		icon: <HistoryIcon className={styles.navIcon} />,
	},
	{
		id: 5,
		name: 'Payouts',
		href: '/payouts',
		icon: <PayoutsIcon className={styles.navIcon} />,
	},
	{
		id: 6,
		name: 'Settings',
		href: '/settings',
		icon: <SettingsIcon className={styles.navIcon} />,
	},
];

export default function Sidebar(): JSX.Element {
	const pathname = usePathname();

	const [sidebarExpanded, setSidebarExpanded] = useState(false);

	return (
		<aside
			className={cn(styles.sidebar, {
				[styles.sidebar_expanded]: sidebarExpanded == true,
				[styles.sidebar_collapsed]: sidebarExpanded == false,
			})}
		>
			{sidebarExpanded == false && (
				<div className={styles.collapsed}>
					<div className={styles.logoContainer}>
						<button className={styles.menuButton}>
							<MenuIcon className={styles.menuIcon} />
						</button>
						<Link href={'/'}>
							<LogoCollapsedIcon className={styles.logo} />
						</Link>
					</div>
					<div className={styles.navContainer}>
						<nav className={styles.nav}>
							<ul className={styles.navList}>
								{sidebarItems.map((element) => {
									return (
										<li
											key={element.id}
											className={styles.navItem}
										>
											<Link
												className={styles.navLink}
												href={element.href}
											>
												{element.icon}
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>
					<div className={styles.authContainer}>
						<Link
							className={styles.signInButton_collapsed}
							href={'/auth'}
						>
							<SignInCollapsedIcon
								className={styles.signInIcon_collapsed}
							/>
						</Link>
					</div>
				</div>
			)}
		</aside>
	);
}
