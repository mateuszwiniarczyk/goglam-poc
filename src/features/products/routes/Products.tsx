import { useState } from 'react';

import { Filters } from '@/features/products/components/Filters';
import { Products } from '@/features/products/components/Products';
import { Toolbar } from '@/features/products/components/Toolbar';

export const ProductsPage = () => {
  const [filtersOpen, setFiltersOpen] = useState(true);

  const handleToggleFilters = () => {
    setFiltersOpen((prev) => !prev);
  };
  return (
    <div className='mt-8 grid h-full grid-cols-1 gap-y-5 gap-x-20 pt-20 md:pt-36 lg:grid-cols-3 xl:grid-cols-4'>
      <Toolbar handleToggleFilters={handleToggleFilters} />
      <Filters filtersOpen={filtersOpen} />
      <Products filtersOpen={filtersOpen} />
    </div>
  );
};
