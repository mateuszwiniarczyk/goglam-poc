import Image from 'next/image';
import Link from 'next/link';

import { formatCurrencyValue } from '@/utils/formatCurrencyValue';

export const Product = ({
  image,
  name,
  price,
  company,
  smellVariant,
  category,
}: {
  image: string;
  name: string;
  price: number;
  company: string;
  smellVariant: string;
  category: string;
}) => {
  return (
    <Link href='/' className='block flex-auto snap-center'>
      <div className='group h-72 w-full snap-center rounded-lg bg-gray-100 px-11 py-20 lg:h-96 lg:px-14 lg:py-28 '>
        <div className='relative h-full w-full'>
          <Image
            src={image}
            alt=''
            fill={true}
            className='object-contain transition-transform ease-linear group-hover:scale-110'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 py-2.5'>
        <span className='text-sm font-medium leading-none'>
          {company} {name}
        </span>
        <span className='text-xs font-medium leading-none text-gray-600'>
          {category}, {smellVariant}
        </span>
        <span className='text-sm font-semibold leading-none'>
          {formatCurrencyValue({
            value: price,
          })}
        </span>
      </div>
    </Link>
  );
};
