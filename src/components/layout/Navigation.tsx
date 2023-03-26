import { motion } from 'framer-motion';

import { ActiveLink } from '@/components/layout/ActiveLink';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const links = [
  { href: '/', label: 'home' },
  { href: '/products', label: 'products' },
  { href: '/blog', label: 'blog' },
  { href: '/about-us', label: 'about us' },
  { href: '/locate-us', label: 'locate us' },
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
        className='fixed inset-0 z-10 flex -translate-x-full flex-col items-center justify-center gap-8 bg-white text-lg font-semibold md:static md:inset-auto md:flex-row md:justify-start md:bg-transparent'
      >
        {links.map(({ href, label }) => (
          <li key={label}>
            <ActiveLink
              href={href}
              activeClassName='after:scale-x-100'
              className='relative after:block after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:ease-in-out hover:after:scale-x-100'
            >
              {label}
            </ActiveLink>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};
