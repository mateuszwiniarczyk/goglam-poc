import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import { Filters } from '@/features/products/components/Filters';
import { Products } from '@/features/products/components/Products';
import { Toolbar } from '@/features/products/components/Toolbar';
import { InferGetStaticPathsType } from '@/types';

export interface ProductApi {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
  longDescription: string;
}

export interface Rating {
  rate: number;
  count: number;
}

const INITIAL_PAGES_COUNT = 10;

export const getStaticPaths = async () => {
  const pages = new Array(INITIAL_PAGES_COUNT).fill(1).map((_, i) => i + 1);
  return {
    paths: pages.map((page) => ({
      params: {
        id: page.toString(),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.id || isNaN(Number(params.id))) {
    return {
      notFound: true,
    };
  }

  const productsCount = 24;
  const offset = (Number(params.id) - 1) * productsCount;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${productsCount}&offset=${offset}`
  );

  const data: ProductApi[] = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch products, received status ${res.status}`);
  }

  return {
    props: {
      data,
    },
  };
};

export const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filtersOpen, setFiltersOpen] = useState(true);

  const handleToggleFilters = () => {
    setFiltersOpen((prev) => !prev);
  };
  return (
    <div className='mt-8 grid h-full grid-cols-1 gap-y-5 gap-x-20 pt-20 md:pt-36 lg:grid-cols-3 xl:grid-cols-4'>
      <Toolbar handleToggleFilters={handleToggleFilters} />
      <Filters filtersOpen={filtersOpen} />
      <Products filtersOpen={filtersOpen} products={data} />
    </div>
  );
};
