import { useLazyQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(queryAvailablePets);

  return {
    getAllAvailablePets,
    loading,
    error,
    pets: data?.allAvailablePets,
  };
};
