import { Inter } from 'next/font/google';
import './globals.css';
import cn from 'classnames';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
