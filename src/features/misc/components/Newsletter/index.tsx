import Image from 'next/image';

import NewsletterImg from '~/images/newsletter.png';
import ArrowForwardIcon from '~/svg/arrow_forward.svg';

export const Newsletter = () => {
  return (
    <section className='relative mt-24 w-full overflow-hidden rounded-3xl bg-gray-100 py-24 px-12 after:absolute after:-top-56 after:-left-32 after:h-96 after:w-96 after:rounded-full after:bg-yellow-300 md:mt-32 md:p-24'>
      <Image
        src={NewsletterImg}
        placeholder='blur'
        alt=''
        width='256'
        height='288'
        className='absolute bottom-0 right-0 h-52 w-44 object-contain object-right-bottom md:h-72 md:w-64'
      />
      <div className='relative z-10 mx-auto flex flex-col items-center text-center'>
        <h2 className='mb-4 text-4xl font-bold'>join the newsletter</h2>
        <p className='mb-6'>
          Sign up here and get our latest updates on everything
        </p>
        <div className='relative flex h-12 w-full max-w-xs gap-1 rounded-full bg-white py-1 pl-5 pr-1'>
          <input
            type='email'
            placeholder='email address'
            className='w-full bg-transparent text-sm font-medium leading-none outline-none'
          />

          <button
            type='button'
            className='flex aspect-square h-full items-center justify-center rounded-full border border-black bg-black text-white hover:bg-white hover:text-black'
          >
            <ArrowForwardIcon className='h-5 w-5 fill-current' />
          </button>
        </div>
      </div>
    </section>
  );
};
