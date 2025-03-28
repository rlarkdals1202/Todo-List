import type { Metadata } from 'next';
import localFont from 'next/font/local';
import GlobalNavigationBar from '@/components/global-navigation-bar';
import './globals.css';

export const metadata: Metadata = {
    title: '코드잇 투두 리스트',
    description: '코드잇 투두 리스트',
};

const nanumSquare = localFont({
    src: [
        { path: '../fonts/NanumSquareEB.ttf', weight: '800', style: 'extra-bold' },
        { path: '../fonts/NanumSquareB.ttf', weight: '700', style: 'bold' },
        { path: '../fonts/NanumSquareR.ttf', weight: '400', style: 'normal' },
    ],
    variable: '--font-nanum-square',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body className={`${nanumSquare.className} flex flex-col`}>
                <header className={'h-[3.75rem]'}>
                    <GlobalNavigationBar />
                </header>
                {children}
            </body>
        </html>
    );
}
