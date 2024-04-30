'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import cn from 'classnames';
import styles from './layout.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(inter.className, 'body')}>
				<Header className="layout__header" />
				<div className={styles.wrapper}>{children}</div>
				<Sidebar className="layout__sidebar" />
			</body>
		</html>
	);
}
