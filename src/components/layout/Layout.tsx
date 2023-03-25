import { Montserrat } from 'next/font/google';

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
    className={`${montserrat.variable} flex h-[3000px] min-h-screen flex-col font-sans`}
  >
    <Header />
    <main className='container mx-auto flex-1 px-4'>{children}</main>
    <footer className='py-4 text-center md:py-5'>
      <span className='text-gray-500'>
        &copy; 2023 Goglam. All rights reserved.
      </span>
    </footer>
  </div>
);
