import { motion } from 'framer-motion';
import Link from 'next/link';

import { useMediaQuery } from '@/hooks/useMediaQuery';

const links = [
  { href: '/', label: 'products' },
  { href: '/', label: 'blog' },
  { href: '/', label: 'about us' },
  { href: '/', label: 'locate us' },
];

interface NavigationProps {
  isNavVisible: boolean;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

export const Navigation = ({ isNavVisible }: NavigationProps) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <nav className='flex items-center'>
      <motion.ul
        initial={matches ? variants['open'] : variants['closed']}
        animate={isNavVisible ? 'open' : 'closed'}
        variants={!matches ? variants : {}}
        transition={{ type: 'tween' }}
        className='fixed inset-0 flex -translate-x-full flex-col items-center justify-center gap-8 bg-white text-lg font-semibold md:static md:inset-auto md:flex-row md:justify-start md:bg-transparent'
      >
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};
