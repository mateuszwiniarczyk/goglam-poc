import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { Product } from '@/components/Product';
import { Swiper, SwiperSlide } from '@/components/Swiper';
import { SectionHeader } from '@/features/misc/components/SectionHeader';
import { GetNewArrivalsQuery } from '@/generated/graphql';

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

export const Arrivals = ({
  data: { collections },
}: {
  data: GetNewArrivalsQuery;
}) => {
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
        heading='This just in'
        href='/products'
        linkLabel='See our products'
      />
      {collections && collections.length > 0 ? (
        <Swiper breakpoints={swiperBreakpoints} spaceBetween={20}>
          {collections[0].productSmellVariants.map((smellVariant) => {
            if (
              !smellVariant.product ||
              !smellVariant.product.company ||
              !smellVariant.product.category
            )
              return;

            return (
              <SwiperSlide key={smellVariant.name}>
                <Product
                  company={smellVariant.product.company.name}
                  name={smellVariant.product.name}
                  smellVariant={smellVariant.name}
                  category={smellVariant.product.category.name}
                  price={smellVariant.product.productSizeVariants[0].price}
                  image={smellVariant.image.url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
    </motion.section>
  );
};
