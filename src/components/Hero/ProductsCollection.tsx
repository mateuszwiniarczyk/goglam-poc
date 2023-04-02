import { MotionValue } from 'framer-motion';
import { nanoid } from 'nanoid';

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
    id: nanoid(),
    img: CoconutWaterImg,
    targetAnimationValues: ['0%', '-500%'],
    className: 'after:bg-emerald-300',
  },
  {
    id: nanoid(),
    img: GrapefruitWaterImg,
    targetAnimationValues: ['0%', '-200%'],
    className: 'after:bg-red-300',
  },
  {
    id: nanoid(),
    img: LavenderWaterImg,
    targetAnimationValues: ['0%', '0%'],
    className: 'after:bg-purple-300',
  },
  {
    id: nanoid(),
    img: RoseWaterImg,
    targetAnimationValues: ['0%', '200%'],
    className: 'after:bg-pink-200',
  },
  {
    id: nanoid(),
    img: SeaWaterImg,
    targetAnimationValues: ['0%', '500%'],
    className: 'after:bg-blue-300',
  },
];

export const ProductsCollection = ({
  scrollYProgress,
}: ProductsCollectionProps) => (
  <div className='hidden md:mx-auto md:mt-16 md:flex md:max-w-6xl md:gap-5 lg:gap-8 xl:gap-10 2xl:gap-14'>
    {products.map((item) => (
      <Product scrollYProgress={scrollYProgress} item={item} key={item.id} />
    ))}
  </div>
);
