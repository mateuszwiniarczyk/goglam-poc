import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.HYGRAPH_API,
  cache: new InMemoryCache(),
});
