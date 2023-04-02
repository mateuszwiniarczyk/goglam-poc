import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { Product } from '@/components/Product';
import { SectionHeader } from '@/components/SectionHeader';
import { Swiper, SwiperSlide } from '@/components/Swiper';
import ArrivalItem1 from '~/images/arrivals-1.png';
import ArrivalItem2 from '~/images/arrivals-2.png';
import ArrivalItem3 from '~/images/arrivals-3.png';
import ArrivalItem4 from '~/images/arrivals-4.png';
import ArrivalItem5 from '~/images/arrivals-5.png';

const swiperBreakpoints = {
  0: {
    slidesPerView: 1,
  },
  500: {
    slidesPerView: 2,
  },
  750: {
    slidesPerView: 3,
  },
  1000: {
    slidesPerView: 4,
  },
  1250: {
    slidesPerView: 5,
  },
};

export const Favourites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      className='mt-24 w-full md:mt-32'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <SectionHeader
        heading='Some of our favourite'
        href='/products'
        linkLabel='See our products'
      />

      <Swiper breakpoints={swiperBreakpoints} spaceBetween={20}>
        <SwiperSlide>
          <Product img={ArrivalItem1} />
        </SwiperSlide>
        <SwiperSlide>
          <Product img={ArrivalItem4} />
        </SwiperSlide>
        <SwiperSlide>
          <Product img={ArrivalItem3} />
        </SwiperSlide>
        <SwiperSlide>
          <Product img={ArrivalItem5} />
        </SwiperSlide>
        <SwiperSlide>
          <Product img={ArrivalItem2} />
        </SwiperSlide>
        <SwiperSlide>
          <Product img={ArrivalItem4} />
        </SwiperSlide>
        <SwiperSlide>
          <Product img={ArrivalItem2} />
        </SwiperSlide>
        <SwiperSlide>
          <Product img={ArrivalItem5} />
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};
