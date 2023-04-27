import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import { Filters } from '@/features/products/components/Filters';
import { Products } from '@/features/products/components/Products';
import { Toolbar } from '@/features/products/components/Toolbar';
import { GetProductsBySmellVariantsDocument } from '@/generated/graphql';
import { apolloClient } from '@/graphql/apolloClient';
import { InferGetStaticPathsType } from '@/types';

const INITIAL_PAGES_COUNT = 1;

export const getStaticPaths = async () => {
  const pages = new Array(INITIAL_PAGES_COUNT).fill(1).map((_, i) => i + 1);
  return {
    paths: pages.map((page) => ({
      params: {
        pageId: page.toString(),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.pageId || isNaN(Number(params.pageId))) {
    return {
      notFound: true,
    };
  }

  const PRODUCTS_PER_PAGE = 6;

  const { data, error } = await apolloClient.query({
    query: GetProductsBySmellVariantsDocument,
    variables: {
      first: PRODUCTS_PER_PAGE,
      skip: Number(params.pageId) * PRODUCTS_PER_PAGE - PRODUCTS_PER_PAGE,
    },
  });

  if (error) {
    return {
      notFound: true,
    };
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
      <Products data={data} />
    </div>
  );
};
