import { clsxm } from '@/lib/clsxm';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  type = 'button',
  className = '',
  children,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={clsxm(
      'flex items-center justify-center rounded-full border border-black bg-black px-12 py-5 text-sm font-bold text-white transition hover:bg-white hover:text-black',
      className
    )}
    {...props}
  >
    {children}
  </button>
);
