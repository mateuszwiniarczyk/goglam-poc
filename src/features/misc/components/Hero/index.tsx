import { useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/Button';
import { ProductsCollection } from '@/features/misc/components/Hero/ProductsCollection';

export const Hero = () => {
  const heroWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroWrapperRef,
    offset: ['start start', 'end start'],
  });

  return (
    <div
      className='flex min-h-screen flex-col items-center justify-center pt-20 text-center md:pt-36'
      ref={heroWrapperRef}
    >
      <h1 className='mb-6 text-4xl font-bold md:text-5xl xl:text-6xl 2xl:text-7xl'>
        Unleash Your Glow
      </h1>
      <p className='mb-8 text-gray-700 md:text-lg'>
        Explore our collection and find your go-to beauty products today
      </p>
      <Link href='/products'>
        <Button>Shop now</Button>
      </Link>

      <ProductsCollection scrollYProgress={scrollYProgress} />
    </div>
  );
};
