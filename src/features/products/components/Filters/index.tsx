import { motion } from 'framer-motion';

import { Filter } from '@/features/products/components/Filters/Filter';
import { clsxm } from '@/lib/clsxm';
const productCategories = ['makeup', 'skincare', 'bath & body', 'hair'];
const colors = ['black', 'yellow', 'green', 'pink', 'gray'];
const cosmeticBrands = ['Loreal', 'Maybelline', 'Revlon', 'Lancome'];

export const Filters = ({ filtersOpen }: { filtersOpen: boolean }) => {
  return (
    <motion.div
      layout='size'
      className={clsxm('col-span-1 space-y-2', !filtersOpen && 'hidden')}
    >
      <Filter title='Product Categories'>
        <div className='flex flex-col items-start gap-2.5'>
          {productCategories.map((category) => (
            <label className='inline-flex items-center gap-2' key={category}>
              <input
                type='checkbox'
                className='h-5 w-5 rounded text-black focus:ring-0'
                value={category}
              />
              <span className='text-sm font-medium text-gray-700'>
                {category}
              </span>
            </label>
          ))}
        </div>
      </Filter>

      <Filter title='Colors'>
        <div className='flex flex-col items-start gap-2.5'>
          {colors.map((color) => (
            <label className='inline-flex items-center gap-2' key={color}>
              <input
                type='checkbox'
                className='h-5 w-5 rounded text-black focus:ring-0'
                value={color}
              />
              <span className='text-sm font-medium text-gray-700'>{color}</span>
            </label>
          ))}
        </div>
      </Filter>

      <Filter title='Brands'>
        <div className='flex flex-col items-start gap-2.5'>
          {cosmeticBrands.map((brand) => (
            <label className='inline-flex items-center gap-2' key={brand}>
              <input
                type='checkbox'
                className='h-5 w-5 rounded text-black focus:ring-0'
                value={brand}
              />
              <span className='text-sm font-medium text-gray-700'>{brand}</span>
            </label>
          ))}
        </div>
      </Filter>

      <Filter title='Price'>
        <div className='flex flex-col items-start gap-2.5'>
          <label className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>$</span>

            <input
              type='number'
              placeholder='From'
              className='w-full rounded-md border-gray-200 shadow-sm focus:ring-0 sm:text-sm'
            />
          </label>

          <label className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>$</span>

            <input
              type='number'
              placeholder='To'
              className='w-full rounded-md border-gray-200 shadow-sm focus:ring-0 sm:text-sm'
            />
          </label>
        </div>
      </Filter>
    </motion.div>
  );
};
