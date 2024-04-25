import { Inter } from 'next/font/google';
import './globals.css';
import cn from 'classnames';
import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Sidebar />
				{children}
			</body>
		</html>
	);
}
