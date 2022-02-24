import React from 'react';
import { useQueryAvailablePets } from '../../hooks/useQueryAvailablePets';

export const Counter = () => {
  const { availablePets, loading, error } = useQueryAvailablePets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h2>Counter:</h2>
      {availablePets && <p>{availablePets}</p>}
    </>
  );
};
