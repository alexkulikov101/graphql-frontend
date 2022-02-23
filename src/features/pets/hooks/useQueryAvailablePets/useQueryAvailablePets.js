import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
  const { data, loading, error } = useQuery(queryAvailablePets);
  return {
    availablePets: data?.availablePets,
    loading,
    error,
  };
};
