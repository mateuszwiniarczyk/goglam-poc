import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export const Product = ({ img }: { img: StaticImageData }) => (
  <Link href='/' className='block flex-auto snap-center'>
    <div className='group h-72 w-full snap-center rounded-lg bg-gray-100 px-11 py-20 lg:h-96 lg:px-14 lg:py-28 '>
      <div className='relative h-full w-full'>
        <Image
          src={img}
          alt=''
          placeholder='blur'
          fill={true}
          className='object-contain transition-transform ease-linear group-hover:scale-110'
        />
      </div>
    </div>
    <div className='flex flex-col gap-2 py-2.5'>
      <span className='text-sm font-medium leading-none'>method men soap</span>
      <span className='text-sm font-semibold leading-none'>$8.00</span>
    </div>
  </Link>
);
