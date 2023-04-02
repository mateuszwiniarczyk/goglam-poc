import { Approach } from '@/features/misc/components/Approach';
import { Arrivals } from '@/features/misc/components/Arrivals';
import { Favourites } from '@/features/misc/components/Favourites';
import { Hero } from '@/features/misc/components/Hero';
import { Mission } from '@/features/misc/components/Mission';
import { Newsletter } from '@/features/misc/components/Newsletter';

export const Home = () => (
  <>
    <Hero />
    <Arrivals />
    <Mission />
    <Favourites />
    <Approach />
    <Newsletter />
  </>
);
