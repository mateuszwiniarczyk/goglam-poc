import { Montserrat } from 'next/font/google';

import { Header } from '@/components/layout/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

export const Layout = ({ children }: LayoutProps) => (
  <div
    className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}
  >
    <Header />
    <main className='px-4 container mx-auto flex-1'>{children}</main>
    <footer className='py-4 md:py-5 text-center'>
      <span className='text-gray-500'>
        &copy; 2023 Goglam. All rights reserved.
      </span>
    </footer>
  </div>
);
