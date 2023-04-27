import { InferGetStaticPropsType } from 'next';

import { Approach } from '@/features/misc/components/Approach';
import { Arrivals } from '@/features/misc/components/Arrivals';
import { Hero } from '@/features/misc/components/Hero';
import { Mission } from '@/features/misc/components/Mission';
import { Newsletter } from '@/features/misc/components/Newsletter';
import { GetNewArrivalsDocument } from '@/generated/graphql';
import { apolloClient } from '@/graphql/apolloClient';

export const getStaticProps = async () => {
  const { data, error } = await apolloClient.query({
    query: GetNewArrivalsDocument,
  });

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      newArrivals: data,
    },
  };
};

export const HomePage = ({
  newArrivals,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Hero />
    <Arrivals data={newArrivals} />
    <Mission />
    <Approach />
    <Newsletter />
  </>
);
