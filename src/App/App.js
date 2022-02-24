import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from '../init';
import { Customer } from '../features/customer';
import { Pets } from '../features/pets';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Customer />
      <Pets />
    </ApolloProvider>
  );
};
