import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import {
  Swiper as SwiperComponent,
  SwiperProps,
  SwiperRef,
  SwiperSlide as SwiperSlideComponent,
  SwiperSlideProps,
} from 'swiper/react';

import ArrowBackIcon from '~/svg/arrow_back.svg';
import ArrowForwardIcon from '~/svg/arrow_forward.svg';

export const Swiper = ({
  isNavigation = true,
  ...props
}: { isNavigation?: boolean } & React.RefAttributes<SwiperRef> &
  SwiperProps) => {
  const nextButton = useRef<SwiperType | null>(null);
  const prevButton = useRef<SwiperType | null>(null);
  return (
    <SwiperComponent
      onBeforeInit={(swiper) => {
        if (!isNavigation) return;
        nextButton.current = swiper;
        prevButton.current = swiper;
      }}
      className='relative'
      {...props}
    >
      {props.children}
      {isNavigation && (
        <>
          <button
            type='button'
            onClick={() => prevButton.current?.slidePrev()}
            className='absolute left-2.5 top-1/2 z-20 h-14 w-14 -translate-y-1/2 rounded-full bg-white p-2 shadow transition-transform hover:scale-110'
          >
            <ArrowBackIcon className='h-full w-full text-black' />
          </button>

          <button
            type='button'
            onClick={() => nextButton.current?.slideNext()}
            className='absolute right-2.5 top-1/2 z-20 h-14 w-14 -translate-y-1/2 rounded-full bg-white p-2 shadow transition-transform hover:scale-110'
          >
            <ArrowForwardIcon className='h-full w-full text-black' />
          </button>
        </>
      )}
    </SwiperComponent>
  );
};

export const SwiperSlide = (props: SwiperSlideProps) => (
  <SwiperSlideComponent {...props}>{props.children}</SwiperSlideComponent>
);

SwiperSlide.displayName = 'SwiperSlide';
// https://github.com/nolimits4web/swiper/issues/4413
