import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import classNames from "classnames";
import { Open_Sans } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Germoneys",
  description: "Germoneys application",
};

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: "300"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/logoicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
    </head>
    <body className={classNames(inter.className, openSans.className,'bg-secondary bg-opacity-25')}>
        {children}
    </body>
    </html>
  );
}
