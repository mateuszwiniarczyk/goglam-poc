import ExpandMoreIcon from '~/svg/expand_more.svg';

interface FilterProps {
  title: string;
  children: React.ReactNode;
}

export const Filter = ({ title, children }: FilterProps) => (
  <details className='group overflow-hidden'>
    <summary className='flex cursor-pointer items-center justify-between gap-2 text-gray-900 transition'>
      <span className='text-sm font-medium'>{title}</span>

      <span className='transition group-open:-rotate-180'>
        <ExpandMoreIcon className='h-4 w-4' />
      </span>
    </summary>

    <div className='mb-4 mt-2.5'>{children}</div>
  </details>
);
