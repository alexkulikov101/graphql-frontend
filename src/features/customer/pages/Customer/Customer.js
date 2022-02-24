import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import { useCustomer } from '../hooks/useCustomer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Customer = () => {
  const { addUser, loading, error, createdAccount } = useCustomer();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const submit = (values) => {
    const payload = {
      variables: {
        account: {
          ...values,
        },
      },
    };
    addUser(payload);
  };

  return (
    <div>
      <h1>Customer</h1>
      {createdAccount && <p>{createdAccount.name}</p>}
      <Formik
        initialValues={{
          name: '',
          username: '',
          password: '',
        }}
        onSubmit={(values) => submit(values)}
      >
        <Form>
          <Wrapper>
            <label htmlFor='Name'>Name</label>
            <Field id='Name' name='name' placeholder='Jane' />

            <label htmlFor='userName'>User Name</label>
            <Field id='userName' name='username' placeholder='Doe' />

            <label htmlFor='password'>Email</label>
            <Field id='password' name='password' placeholder='jane@acme.com' type='email' />
            <button type='submit'>Submit</button>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
};
