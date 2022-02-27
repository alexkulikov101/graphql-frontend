import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import { useLogin } from '../hooks/useLogin';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Login = () => {
  const { logIn, loading, error } = useLogin();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const submit = (values) => {
    const payload = {
      variables: {
        ...values,
      },
    };
    logIn(payload);
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => submit(values)}
      >
        <Form>
          <Wrapper>
            <label htmlFor='userName'>User Name</label>
            <Field id='userName' name='username' placeholder='Doe' />

            <label htmlFor='password'>Password</label>
            <Field id='password' name='password' type='password' />
            <button type='submit'>login</button>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
};
