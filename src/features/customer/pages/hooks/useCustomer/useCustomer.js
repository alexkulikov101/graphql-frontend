import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

const mutationCreteAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {
  const [addUser, { data, loading, error }] = useMutation(mutationCreteAccount);

  return {
    addUser,
    createdAccount: data && data.createAccount,
    loading,
    error,
  };
};
