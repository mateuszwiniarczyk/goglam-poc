import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import { ProductsCollection } from '@/components/Hero/ProductsCollection';

export const Hero = () => {
  const heroWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroWrapperRef,
    offset: ['start start', 'end start'],
  });

  return (
    <div
      className='flex flex-col items-center justify-center text-center'
      ref={heroWrapperRef}
    >
      <h1 className='mb-6 text-4xl font-bold md:text-5xl xl:text-6xl 2xl:text-7xl'>
        Unleash Your Glow
      </h1>
      <p className='mb-8 md:text-lg'>
        Explore our collection and find your go-to beauty products today
      </p>
      <button
        type='button'
        className='flex items-center justify-center rounded-full border border-black bg-black px-12 py-5 text-sm font-bold text-white transition hover:bg-white hover:text-black'
      >
        Shop now
      </button>
      <ProductsCollection scrollYProgress={scrollYProgress} />
    </div>
  );
};
