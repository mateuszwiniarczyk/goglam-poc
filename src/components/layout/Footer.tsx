import Link from 'next/link';

import { StyledLink } from '@/components/StyledLink';
import FacebookIcon from '~/svg/facebook.svg';
import InstagramIcon from '~/svg/instagram.svg';
import PinterestIcon from '~/svg/pinterest.svg';
import TwitterIcon from '~/svg/twitter.svg';

export const Footer = () => {
  return (
    <footer className='mt-24 py-4 text-center md:mt-32 md:py-5'>
      <div className='container mx-auto grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-4'>
        <div className='text-left'>
          <p className='mb-5 text-2xl font-bold'>our business</p>
          <ul className='flex flex-col items-start gap-2.5 text-sm font-medium'>
            <li>
              <StyledLink href='/'>transparency</StyledLink>
            </li>
            <li>
              <StyledLink href='/'>our mission</StyledLink>
            </li>
            <li>
              <StyledLink href='/'>promise and values</StyledLink>
            </li>
          </ul>
        </div>
        <div className='text-left'>
          <p className='mb-5 text-2xl font-bold'>partnerships</p>
          <ul className='flex flex-col items-start gap-2.5 text-sm font-medium'>
            <li>
              <StyledLink href='/'>press media</StyledLink>
            </li>
            <li>
              <StyledLink href='/'>careers</StyledLink>
            </li>
            <li>
              <StyledLink href='/'>partners</StyledLink>
            </li>
          </ul>
        </div>
        <div className='text-left'>
          <p className='mb-5 text-2xl font-bold'>our support</p>
          <ul className='flex flex-col items-start gap-2.5 text-sm font-medium'>
            <li>
              <StyledLink href='/'>contact us</StyledLink>
            </li>
            <li>
              <StyledLink href='/'>FAQ</StyledLink>
            </li>
            <li>
              <StyledLink href='/'>locate us</StyledLink>
            </li>
          </ul>
        </div>
        <div className='text-left'>
          <p className='mb-5 text-2xl font-bold'>connect</p>
          <div className='flex gap-2.5'>
            <Link href='/' className='h-9 w-9 rounded-full bg-violet-500 p-2'>
              <FacebookIcon className='h-full w-full fill-white' />
            </Link>
            <Link href='/' className='h-9 w-9 rounded-full bg-amber-500 p-2'>
              <InstagramIcon className='h-full w-full fill-white' />
            </Link>
            <Link href='/' className='h-9 w-9 rounded-full bg-blue-600 p-2'>
              <TwitterIcon className='h-full w-full fill-white' />
            </Link>
            <Link href='/' className='h-9 w-9 rounded-full bg-pink-500 p-2'>
              <PinterestIcon className='h-full w-full fill-white' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
