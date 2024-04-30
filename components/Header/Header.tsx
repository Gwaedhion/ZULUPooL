import { Button, ConfigProvider, Select } from 'antd';
import styles from './Header.module.css';
import { useState } from 'react';
import HeaderCollapsedIcon from '../../public/components-icons/header-icons/header-icon-collapsed.svg';
import HeaderExpandedIcon from '../../public/components-icons/header-icons/header-icon-expanded.svg';
import cn from 'classnames';
import { HeaderProps } from './Header.props';

export default function Header({ ...props }: HeaderProps): JSX.Element {
	const [headerExpanded, setHeaderExpanded] = useState(false);

	const toggleHeaderState = () => {
		if (headerExpanded == false) {
			setHeaderExpanded(true);
		}
		if (headerExpanded == true) {
			setHeaderExpanded(false);
		}
	};

	return (
		<header className={styles.wrapper} {...props}>
			<div
				className={cn(styles.headerDecoration, {
					[styles.headerDecoration_expanded]: headerExpanded == true,
					[styles.headerDecoration_collapsed]:
						headerExpanded == false,
				})}
			></div>
			<div
				className={cn(styles.header, {
					[styles.header_expanded]: headerExpanded == true,
					[styles.header_collapsed]: headerExpanded == false,
				})}
			>
				{headerExpanded == false && (
					<button
						className={styles.stateButton}
						onClick={() => toggleHeaderState()}
					>
						<HeaderCollapsedIcon
							className={styles.icon_collapsed}
						/>
					</button>
				)}
				{headerExpanded == true && (
					<div className={styles.selectWrapper}>
						<button
							className={styles.stateButton}
							onClick={() => toggleHeaderState()}
						>
							<HeaderExpandedIcon
								className={styles.icon_expanded}
							/>
						</button>
						<div
							className={cn(
								styles.selectContainer,
								styles.selectContainer__language
							)}
						>
							<span
								className={cn(
									styles.selectText,
									styles.selectText__language
								)}
							>
								Language:{' '}
							</span>
							<Select
								className={styles.selectLanguage}
								defaultValue={'english'}
							>
								<Select.Option value="english">
									English
								</Select.Option>
								<Select.Option value="russian">
									Russian
								</Select.Option>
							</Select>
						</div>
						<div
							className={cn(
								styles.selectContainer,
								styles.selectContainer__theme
							)}
						>
							<span
								className={cn(
									styles.selectText,
									styles.selectText__theme
								)}
							>
								Theme:{' '}
							</span>
							<Select
								className={styles.selectTheme}
								defaultValue={'light'}
							>
								<Select.Option value="light">
									Light
								</Select.Option>
								<Select.Option value="dark">Dark</Select.Option>
							</Select>
						</div>
						<ConfigProvider
							theme={{
								components: {
									Button: {},
								},
							}}
						>
							<Button
								className={styles.logoutButton}
								type="default"
							>
								Username Username
							</Button>
						</ConfigProvider>
					</div>
				)}
			</div>
		</header>
	);
}
