import { cubicBezier, motion, MotionValue, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import { clsxm } from '@/lib/clsxm';

interface ProductProps {
  scrollYProgress: MotionValue<number>;
  item: {
    img: StaticImageData;
    targetAnimationValues: string[];
    id: number;
    className?: string;
  };
}

export const Product = ({ scrollYProgress, item }: ProductProps) => {
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    item.targetAnimationValues,
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  );
  return (
    <motion.div
      style={{ translateX }}
      className={clsxm(
        item.className,
        'py-14 after:aspect-square after:block after:absolute after:left-0 after:w-full after:-z-10 after:top-0 after:rounded-full relative'
      )}
    >
      <Image src={item.img} alt='' />
    </motion.div>
  );
};
