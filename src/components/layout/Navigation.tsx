import Link from 'next/link';

import { clsxm } from '@/lib/clsxm';

const links = [
  { href: '/', label: 'Products' },
  { href: '/', label: 'Blog' },
  { href: '/', label: 'Contact' },
];

interface NavigationProps {
  isNavVisible: boolean;
}

export const Navigation = ({ isNavVisible }: NavigationProps) => (
  <nav className='flex items-center'>
    <ul
      className={clsxm(
        isNavVisible ? 'translate-x-0' : 'translate-x-full',
        'fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 md:static md:inset-auto md:bg-transparent md:flex-row md:justify-start md:translate-x-0 font-medium text-lg'
      )}
    >
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
