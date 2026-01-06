import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Walras Research',
  description: 'Advanced algorithmic strategies delivering exceptional returns and stable growth for institutional and high-net-worth investors in cryptocurrency and traditional markets.',
  keywords: 'crypto trading, quantitative finance, algorithmic trading, cryptocurrency, investment, hedge fund, traditional markets',
  authors: [{ name: 'Walras Research' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Walras Research',
    description: 'Advanced algorithmic strategies delivering exceptional returns and stable growth for institutional and high-net-worth investors.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}