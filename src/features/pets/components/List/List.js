import React from 'react';
import styled from 'styled-components';

import { useQueryAllPets } from '../../hooks';

const Wrapper = styled.div`
  max-width: 300px;
`;

const StyledItem = styled.div`
  border: 1px solid #000;
  margin-bottom: 20px;
`;

export const List = () => {
  const { loading, error, pets } = useQueryAllPets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Wrapper>
      {pets.map(({ id, name, weight }) => (
        <StyledItem key={id}>
          <p>ID: {id}</p>
          <p>Name: {name}</p>
          <p>Weight: {weight}</p>
        </StyledItem>
      ))}
    </Wrapper>
  );
};
