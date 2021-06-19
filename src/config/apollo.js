import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  connectToDevTools: true,
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export default client;
