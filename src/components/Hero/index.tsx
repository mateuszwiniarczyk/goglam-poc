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
      className='text-center items-center flex flex-col justify-center'
      ref={heroWrapperRef}
    >
      <h1 className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6'>
        Unleash Your Glow
      </h1>
      <p className='mb-8 md:text-lg'>
        Explore our collection and find your go-to beauty products today
      </p>
      <button
        type='button'
        className='text-sm bg-black border border-black text-white flex justify-center items-center px-12 py-5 rounded-full font-bold hover:bg-transparent hover:text-black transition'
      >
        Shop now
      </button>
      <ProductsCollection scrollYProgress={scrollYProgress} />
    </div>
  );
};
