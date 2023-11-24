import './globals.css';
import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import { ReduxProvider } from './redux/provider';
import Header from './ui/header/header';
import Panel from './ui/panel/panel';

export const metadata: Metadata = {
  title: 'Events Dashboard',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mx-2 h-screen flex flex-col ${inter.className} antialiased`}
      >
        <ReduxProvider>
          <Header />
          <Panel children={children} />
        </ReduxProvider>
      </body>
    </html>
  );
}
