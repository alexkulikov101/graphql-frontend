import { useLazyQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryPetById = loader('./gql/queryPetById.graphql');

export const useQueryProfile = () => {
  const [getPetProfile, { loading, error, data }] = useLazyQuery(queryPetById);

  return {
    getPetProfile,
    loading,
    error,
    profile: data && data.petById,
  };
};
