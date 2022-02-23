import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from '../init';
import { Pets } from '../features/pets';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pets />
    </ApolloProvider>
  );
};
