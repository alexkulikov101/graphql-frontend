import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckIn = () => {
  const [_checkIn, { data, loading, error }] = useMutation(mutationCheckIn);

  const checkIn = (id) => {
    _checkIn({
      variables: {
        id,
      },
    });
  };

  const pet = data && data.checkIn.pet;

  return {
    checkIn,
    loading,
    error,
    pet,
  };
};
