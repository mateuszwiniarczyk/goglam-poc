import Image from 'next/image';
import Link from 'next/link';

import { ProductApi } from '@/features/products/routes/Products';
import ArrivalItem1 from '~/images/arrivals-1.png';
import ArrivalItem2 from '~/images/arrivals-2.png';
import ArrivalItem3 from '~/images/arrivals-3.png';
import ArrivalItem4 from '~/images/arrivals-4.png';
import ArrivalItem5 from '~/images/arrivals-5.png';

const images = [
  ArrivalItem1,
  ArrivalItem2,
  ArrivalItem3,
  ArrivalItem4,
  ArrivalItem5,
];

export const Product = ({ product }: { product: ProductApi }) => {
  //TODO: replace with real images
  const randomNum = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

  return (
    <Link href='/' className='block flex-auto snap-center'>
      <div className='group h-72 w-full snap-center rounded-lg bg-gray-100 px-11 py-20 lg:h-96 lg:px-14 lg:py-28 '>
        <div className='relative h-full w-full'>
          <Image
            src={images[randomNum]}
            alt=''
            placeholder='blur'
            fill={true}
            className='object-contain transition-transform ease-linear group-hover:scale-110'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 py-2.5'>
        <span className='text-sm font-medium leading-none'>
          {product?.title ? product.title : 'method men soap'}
        </span>
        <span className='text-sm font-semibold leading-none'>
          {product?.price ? `$${product.price}.00` : '$8.00'}
        </span>
      </div>
    </Link>
  );
};
