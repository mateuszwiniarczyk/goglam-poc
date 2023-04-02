import Image from 'next/image';

import MissionImg from '~/images/mission.jpg';

export const Mission = () => {
  return (
    <section className='mt-32'>
      <div className='grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-2 lg:gap-24'>
        <div className='relative h-64 sm:h-80 lg:h-full'>
          <Image
            alt=''
            src={MissionImg}
            fill
            className='h-full w-full rounded-3xl object-cover'
          />
        </div>

        <div className='relative flex items-center justify-center'>
          <div className='max-w-lg py-8 sm:py-16 lg:py-24 2xl:py-48'>
            <h2 className='mb-5 text-2xl font-semibold sm:text-5xl'>
              Increase the peace
            </h2>

            <p className='mb-10 text-lg'>
              Start your happy home revolution with our powerful products. We
              spend a ton of time thinking about our products so that you
              don&#39;t have to.
            </p>

            <button
              type='button'
              className='flex items-center justify-center rounded-full border border-black bg-black px-12 py-5 text-sm font-bold text-white transition hover:bg-white hover:text-black'
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
