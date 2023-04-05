import { Product } from '@/components/Product';
import { Filters } from '@/features/products/components/Filters';
import { Toolbar } from '@/features/products/components/Toolbar';
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

export const Products = () => (
  <div className='mt-8 grid h-full grid-cols-1 gap-5 gap-x-10 pt-20 sm:grid-cols-2 md:pt-36 lg:grid-cols-4'>
    <Filters />
    <div className='col-span-1 sm:col-span-2 lg:col-span-3'>
      <Toolbar />
      <div className='col-start-2 mt-5 grid grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-2 xl:col-span-3 xl:grid-cols-3'>
        {products.map(({ id, image }) => (
          <Product key={id} img={image} />
        ))}
      </div>
    </div>
  </div>
);
