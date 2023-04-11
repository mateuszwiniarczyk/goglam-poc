import { motion } from 'framer-motion';

import { Product } from '@/components/Product';
import { ProductApi } from '@/features/products/routes/Products';
import { clsxm } from '@/lib/clsxm';

export const Products = ({
  filtersOpen,
  products,
}: {
  filtersOpen: boolean;
  products: ProductApi[];
}) => (
  <motion.div
    layout
    className={clsxm(
      'col-span-1 grid gap-5 sm:grid-cols-2 lg:col-span-2',
      filtersOpen
        ? 'xl:col-span-3 xl:grid-cols-3'
        : 'xl:col-span-4 xl:grid-cols-4'
    )}
  >
    {products?.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </motion.div>
);
