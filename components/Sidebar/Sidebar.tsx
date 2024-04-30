'use client';
import styles from './Sidebar.module.css';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { useState } from 'react';
import Link from 'next/link';
import StatsIcon from '../../public/stats-page/nav-icon.svg';
import RewardsIcon from '../../public/math-page/nav-icon.svg';
import StartWorkIcon from '../../public/startwork-page/nav-icon.svg';
import MonitoringIcon from '../../public/monitoring-page/nav-icon.svg';
import HistoryIcon from '../../public/history-page/nav-icon.svg';
import PayoutsIcon from '../../public/payouts-page/nav-icon.svg';
import SettingsIcon from '../../public/settings-page/nav-icon.svg';
import MenuIcon from '../../public/components-icons/sidebar-icons/menu.svg';
import MenuCollapsedIcon from '../../public/components-icons/sidebar-icons/menu-collapse-icon.svg';
import LogoCollapsedIcon from '../../public/logo-collapsed.svg';
import LogoFullIcon from '../../public/logo-full.svg';
import SignInCollapsedIcon from '../../public/components-icons/sidebar-icons/login-icon-collapsed.svg';
import { SidebarProps } from './Sidebar.props';

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
	const pathname = usePathname();

	const [sidebarExpanded, setSidebarExpanded] = useState(false);

	const sidebarItems = [
		{
			id: 0,
			name: 'Pool history',
			href: '/stats',
			icon: (
				<StatsIcon
					className={cn(styles.navIcon, {
						[styles.navIcon_collapsed]: sidebarExpanded == false,
						[styles.navIcon_expanded]: sidebarExpanded == true,
					})}
				/>
			),
		},
		{
			id: 1,
			name: 'Rewards',
			href: '/math',
			icon: (
				<RewardsIcon
					className={cn(styles.navIcon, {
						[styles.navIcon_collapsed]: sidebarExpanded == false,
						[styles.navIcon_expanded]: sidebarExpanded == true,
					})}
				/>
			),
		},
		{
			id: 2,
			name: 'Start work',
			href: '/connect',
			icon: (
				<StartWorkIcon
					className={cn(styles.navIcon, {
						[styles.navIcon_collapsed]: sidebarExpanded == false,
						[styles.navIcon_expanded]: sidebarExpanded == true,
					})}
				/>
			),
		},
		{
			id: 3,
			name: 'Monitoring',
			href: '/monitoring',
			icon: (
				<MonitoringIcon
					className={cn(styles.navIcon, {
						[styles.navIcon_collapsed]: sidebarExpanded == false,
						[styles.navIcon_expanded]: sidebarExpanded == true,
					})}
				/>
			),
		},
		{
			id: 4,
			name: 'History',
			href: '/history',
			icon: (
				<HistoryIcon
					className={cn(styles.navIcon, {
						[styles.navIcon_collapsed]: sidebarExpanded == false,
						[styles.navIcon_expanded]: sidebarExpanded == true,
					})}
				/>
			),
		},
		{
			id: 5,
			name: 'Payouts',
			href: '/payouts',
			icon: (
				<PayoutsIcon
					className={cn(styles.navIcon, {
						[styles.navIcon_collapsed]: sidebarExpanded == false,
						[styles.navIcon_expanded]: sidebarExpanded == true,
					})}
				/>
			),
		},
		{
			id: 6,
			name: 'Settings',
			href: '/settings',
			icon: (
				<SettingsIcon
					className={cn(styles.navIcon, {
						[styles.navIcon_collapsed]: sidebarExpanded == false,
						[styles.navIcon_expanded]: sidebarExpanded == true,
					})}
				/>
			),
		},
	];

	return (
		<aside
			className={cn(styles.sidebar, {
				[styles.sidebar_expanded]: sidebarExpanded == true,
				[styles.sidebar_collapsed]: sidebarExpanded == false,
			})}
			// onMouseLeave={() => setSidebarExpanded(false)}
		>
			<div className={styles.collapsed}>
				<div className={styles.logoContainer}>
					{sidebarExpanded == false && (
						<div className={styles.menuContainer_collapsed}>
							<button
								className={styles.menuButton_collapsed}
								onClick={() => {
									setSidebarExpanded(true);
								}}
							>
								<MenuIcon
									className={styles.menuIcon_collapsed}
								/>
							</button>
							<Link
								href={'/'}
								className={styles.logoLink_collapsed}
							>
								<LogoCollapsedIcon
									className={styles.logo_collapsed}
								/>
							</Link>
						</div>
					)}
					{sidebarExpanded == true && (
						<div className={styles.menuContainer_expanded}>
							<div className={styles.menu_expanded}>
								<span className={styles.menuText}>Menu</span>
								<button
									className={styles.menuButton_expanded}
									onClick={() => {
										setSidebarExpanded(false);
									}}
								>
									<MenuCollapsedIcon
										className={styles.menuIcon_expanded}
									/>
								</button>
							</div>
							<Link
								href={'/'}
								className={styles.logoLink_expanded}
							>
								<LogoCollapsedIcon
									className={styles.logo_expanded}
								/>
								<LogoFullIcon
									className={styles.logoText_expanded}
								/>
							</Link>
						</div>
					)}
				</div>
				<div className={styles.decoration}></div>
				<div className={styles.navContainer}>
					<nav className={styles.nav}>
						<ul
							className={cn(styles.navList, {
								[styles.navList_collapsed]:
									sidebarExpanded == false,
								[styles.navList_expanded]:
									sidebarExpanded == true,
							})}
						>
							{sidebarItems.map((element) => {
								const isActive = pathname.startsWith(
									element.href
								);

								return (
									<li
										key={element.id}
										className={cn(styles.navItem, {
											[styles.navItem_collapsed]:
												sidebarExpanded == false,
											[styles.navItem_expanded]:
												sidebarExpanded == true,
										})}
									>
										{sidebarExpanded == false && (
											<div
												className={styles.navItem__prop}
											>
												{element.name}
											</div>
										)}
										<Link
											className={cn(styles.navLink, {
												[styles.navLink_expanded]:
													sidebarExpanded == true,
												[styles.isActive_collapsed]:
													isActive &&
													sidebarExpanded == false,
												[styles.isActive_expanded]:
													isActive &&
													sidebarExpanded == true,
											})}
											href={element.href}
										>
											{element.icon}
											{sidebarExpanded == true && (
												<span
													className={cn(
														styles.navElement__text,
														{
															[styles.navElement__text_expanded]:
																sidebarExpanded ==
																true,
															[styles.navElement__text_active]:
																isActive,
														}
													)}
												>
													{element.name}
												</span>
											)}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<div className={styles.authContainer}>
					<Link
						className={cn(styles.authLink, {
							[styles.authLink_expanded]: sidebarExpanded == true,
						})}
						href={'/auth'}
					>
						<SignInCollapsedIcon className={styles.signInIcon} />
						{sidebarExpanded == true && (
							<span className={styles.authLink__text}>
								Sign In
							</span>
						)}
					</Link>
				</div>
			</div>
		</aside>
	);
}
