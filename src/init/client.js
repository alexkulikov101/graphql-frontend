import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = localStorage.getItem('token');

const authorizationLink = setContext((request, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
  },
}));

// GraphQL Server
const uri = 'https://funded-pet-library.moonhighway.com/';
const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri,
});

export const client = new ApolloClient({
  cache,
  link: authorizationLink.concat(httpLink),
});
