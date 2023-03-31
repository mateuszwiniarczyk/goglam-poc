import { Montserrat } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const Layout = ({ children }: LayoutProps) => (
  <div
    className={`${montserrat.variable} flex min-h-screen flex-col font-sans`}
  >
    <Header />
    <main className='container mx-auto flex-1 px-4'>{children}</main>
    <Footer />
  </div>
);
