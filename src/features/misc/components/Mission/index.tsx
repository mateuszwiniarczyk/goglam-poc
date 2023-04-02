import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button';
import MissionImg from '~/images/mission.jpg';

export const Mission = () => {
  return (
    <section className='mt-24 md:mt-32'>
      <div className='grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-2 lg:gap-24'>
        <div className='relative h-64 sm:h-80 lg:h-full'>
          <Image
            alt=''
            src={MissionImg}
            placeholder='blur'
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

            <Link href='/products'>
              <Button>Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
