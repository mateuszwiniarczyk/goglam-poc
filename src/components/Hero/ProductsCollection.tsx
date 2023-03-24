import { MotionValue } from 'framer-motion';

import { Product } from '@/components/Hero/Product';
import CoconutWaterImg from '~/images/coconut-water.png';
import GrapefruitWaterImg from '~/images/grapefruit-water.png';
import LavenderWaterImg from '~/images/lavender-water.png';
import RoseWaterImg from '~/images/rose-water.png';
import SeaWaterImg from '~/images/sea-water.png';

interface ProductsCollectionProps {
  scrollYProgress: MotionValue<number>;
}

const products = [
  {
    id: 0,
    img: CoconutWaterImg,
    targetAnimationValues: ['0%', '-500%'],
    className: 'after:bg-emerald-300',
  },
  {
    id: 1,
    img: GrapefruitWaterImg,
    targetAnimationValues: ['0%', '-200%'],
    className: 'after:bg-red-300',
  },
  {
    id: 2,
    img: LavenderWaterImg,
    targetAnimationValues: ['0%', '0%'],
    className: 'after:bg-purple-300',
  },
  {
    id: 3,
    img: RoseWaterImg,
    targetAnimationValues: ['0%', '200%'],
    className: 'after:bg-pink-200',
  },
  {
    id: 4,
    img: SeaWaterImg,
    targetAnimationValues: ['0%', '500%'],
    className: 'after:bg-blue-300',
  },
];

export const ProductsCollection = ({
  scrollYProgress,
}: ProductsCollectionProps) => (
  <div className='hidden md:flex md:gap-6 md:mt-16'>
    {products.map((item) => (
      <Product scrollYProgress={scrollYProgress} item={item} key={item.id} />
    ))}
  </div>
);
