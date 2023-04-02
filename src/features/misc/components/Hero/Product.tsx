import { cubicBezier, motion, MotionValue, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import { clsxm } from '@/lib/clsxm';

interface ProductProps {
  scrollYProgress: MotionValue<number>;
  item: {
    img: StaticImageData;
    targetAnimationValues: string[];
    id: string;
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
        'relative py-14 after:absolute after:left-0 after:top-0 after:-z-10 after:block after:aspect-square after:w-full after:rounded-full'
      )}
    >
      <Image src={item.img} alt='' placeholder='blur' priority />
    </motion.div>
  );
};
