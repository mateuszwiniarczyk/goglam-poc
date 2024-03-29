import { SectionHeader } from '@/features/misc/components/SectionHeader';
import DiversityIcon from '~/svg/diversity.svg';
import LeafIcon from '~/svg/leaf.svg';
import RabbitIcon from '~/svg/rabbit.svg';
import ShowerIcon from '~/svg/shower.svg';

export const Approach = () => {
  return (
    <section className='mt-24 w-full md:mt-32'>
      <SectionHeader
        heading='Our fresh approach'
        href='/products'
        linkLabel='See our products'
      />
      <div className='flex snap-x justify-between gap-5 overflow-x-auto pb-5 md:gap-10 lg:gap-14 2xl:gap-20 '>
        <div className='flex w-60 flex-none snap-center flex-col md:w-auto md:flex-1'>
          <LeafIcon className='mb-5 h-12 w-12' />
          <h3 className='mb-2.5 text-lg font-semibold'>Nature inspired</h3>
          <p className='text-gray-700'>
            We consider our responsibility to the environment in all aspects
          </p>
        </div>
        <div className='flex w-60 flex-none snap-center flex-col md:w-auto md:flex-1'>
          <RabbitIcon className='mb-5 h-12 w-12' />
          <h3 className='mb-2.5 text-lg font-semibold'>Animal cruelty-free</h3>
          <p className='text-gray-700'>
            Tested by people definitely not on animals
          </p>
        </div>
        <div className='flex w-60 flex-none snap-center flex-col md:w-auto md:flex-1'>
          <ShowerIcon className='mb-5 h-12 w-12' />
          <h3 className='mb-2.5 text-lg font-semibold'>No added parabens</h3>
          <p className='text-gray-700'>
            No added parabens, phthalates or aluminum
          </p>
        </div>
        <div className='flex w-60 flex-none snap-center flex-col md:w-auto md:flex-1'>
          <DiversityIcon className='mb-5 h-12 w-12' />
          <h3 className='mb-2.5 text-lg font-semibold'>
            Business with a purpose
          </h3>
          <p className='text-gray-700'>
            We make business decisions with people in mind
          </p>
        </div>
      </div>
    </section>
  );
};
