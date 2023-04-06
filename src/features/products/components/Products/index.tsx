import { motion } from 'framer-motion';

import { Product } from '@/components/Product';
import { clsxm } from '@/lib/clsxm';
import ArrivalItem1 from '~/images/arrivals-1.png';
import ArrivalItem2 from '~/images/arrivals-2.png';
import ArrivalItem3 from '~/images/arrivals-3.png';
import ArrivalItem4 from '~/images/arrivals-4.png';
import ArrivalItem5 from '~/images/arrivals-5.png';

const products = [
  { id: 1, image: ArrivalItem1 },
  { id: 2, image: ArrivalItem2 },
  { id: 3, image: ArrivalItem3 },
  { id: 4, image: ArrivalItem4 },
  { id: 5, image: ArrivalItem5 },
  { id: 6, image: ArrivalItem1 },
  { id: 7, image: ArrivalItem2 },
  { id: 8, image: ArrivalItem3 },
  { id: 9, image: ArrivalItem4 },
];

export const Products = ({ filtersOpen }: { filtersOpen: boolean }) => {
  return (
    <motion.div
      layout
      className={clsxm(
        'col-span-1 grid gap-5 sm:grid-cols-2 lg:col-span-2',
        filtersOpen
          ? 'xl:col-span-3 xl:grid-cols-3'
          : 'xl:col-span-4 xl:grid-cols-4'
      )}
    >
      {products.map(({ id, image }) => (
        <Product key={id} img={image} />
      ))}
    </motion.div>
  );
};
