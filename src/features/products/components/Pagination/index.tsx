import { useRouter } from 'next/router';
import { useState } from 'react';

import { GetProductsBySmellVariantsQuery } from '@/generated/graphql';

interface PaginationProps {
  count: GetProductsBySmellVariantsQuery['productSmellVariantsConnection']['aggregate']['count'];
  pageInfo: GetProductsBySmellVariantsQuery['productSmellVariantsConnection']['pageInfo'];
}

export const Pagination = ({
  count,
  pageInfo: { hasNextPage, hasPreviousPage },
}: PaginationProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(
    Number(router.query.pageId) || 1
  );

  const totalPages = Math.ceil(count / 6);

  const handleNextPage = () => {
    router.push(`/products/pages/${currentPage + 1}`);
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    router.push(`/products/pages/${currentPage - 1}`);
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='col-span-1 mx-auto flex items-center justify-center gap-3 lg:col-span-2 xl:col-span-3'>
      <button
        className='inline-flex items-center justify-center text-gray-900 rtl:rotate-180'
        onClick={handlePrevPage}
        disabled={!hasPreviousPage}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <p className='text-sm text-gray-900'>
        {currentPage}
        <span className='mx-0.25'>/</span>
        {totalPages}
      </p>

      <button
        onClick={handleNextPage}
        disabled={!hasNextPage}
        className='inline-flex items-center justify-center text-gray-900 rtl:rotate-180'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
};
