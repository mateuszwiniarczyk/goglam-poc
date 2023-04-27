import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import { Layout } from '@/components/layout/Layout';
import { apolloClient } from '@/graphql/apolloClient';

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
);

export default App;
