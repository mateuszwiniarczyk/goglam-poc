import { Approach } from '@/components/Approach';
import { Arrivals } from '@/components/Arrivals';
import { Favourites } from '@/components/Favourites';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Newsletter } from '@/components/Newsletter';

const Home = () => (
  <>
    <Hero />
    <Arrivals />
    <Mission />
    <Favourites />
    <Approach />
    <Newsletter />
  </>
);

export default Home;
