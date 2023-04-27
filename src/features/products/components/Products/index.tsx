import { useRouter } from 'next/router';

import { Product } from '@/components/Product';
import { Pagination } from '@/features/products/components/Pagination';
import { GetProductsBySmellVariantsQuery } from '@/generated/graphql';

export const Products = ({
  data,
}: {
  data: GetProductsBySmellVariantsQuery;
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className='col-span-1 grid gap-5 sm:grid-cols-2 lg:col-span-2 xl:col-span-3 xl:grid-cols-3'>
      {data.productSmellVariantsConnection.edges.map(
        ({ node: { id, image, name: smellVariant, product } }) => {
          if (!product || !product.company || !product.category) return;

          return (
            <Product
              key={id}
              name={product.name}
              smellVariant={smellVariant}
              category={product.category.name}
              company={product.company.name}
              image={image.url}
              price={product.productSizeVariants[0].price}
            />
          );
        }
      )}
      <Pagination
        count={data.productSmellVariantsConnection.aggregate.count}
        pageInfo={data.productSmellVariantsConnection.pageInfo}
      />
    </div>
  );
};
