import Link, { LinkProps } from 'next/link';

import { clsxm } from '@/lib/clsxm';

const variants = {
  primary:
    'relative after:block after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:ease-in-out hover:after:scale-x-100',
  underline: 'font-semibold underline underline-offset-4',
};

export const StyledLink = ({
  variant = 'primary',
  href = '/',
  className = '',
  children,
  ...props
}: {
  variant?: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
} & LinkProps) => (
  <Link
    href={href}
    className={clsxm('text-black', variants[variant], className)}
    {...props}
  >
    {children}
  </Link>
);
