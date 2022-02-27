import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

const mutationLogIn = loader('./gql/mutationLogin.graphql');

export const useLogin = () => {
  const [logIn, { data, loading, error }] = useMutation(mutationLogIn);

  const authorizedCustomer = data && data.logIn;
  const token = authorizedCustomer && authorizedCustomer.token;

  if (token) {
    localStorage.setItem('token', token);
  }

  return {
    logIn,
    loading,
    error,
    token,
  };
};
