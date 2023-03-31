import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { Product } from '@/components/Favourites/Product';
import ArrivalItem1 from '~/images/arrivals-1.png';
import ArrivalItem2 from '~/images/arrivals-2.png';
import ArrivalItem3 from '~/images/arrivals-3.png';
import ArrivalItem4 from '~/images/arrivals-4.png';
import ArrivalItem5 from '~/images/arrivals-5.png';

export const Favourites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      className='mt-32 w-full'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div className='mb-10 flex flex-col items-end justify-between gap-5 md:mb-24 md:flex-row'>
        <h2 className='mr-auto text-2xl font-semibold md:mr-0 md:text-4xl'>
          Some of our favourite
        </h2>
        <Link
          href='/'
          className='text-sm font-semibold underline underline-offset-4 md:text-lg'
        >
          See our products
        </Link>
      </div>
      <div className='flex snap-x gap-2.5 overflow-x-auto pb-5'>
        <Product img={ArrivalItem1} />
        <Product img={ArrivalItem4} />
        <Product img={ArrivalItem3} />
        <Product img={ArrivalItem5} />
        <Product img={ArrivalItem2} />
      </div>
    </motion.section>
  );
};
