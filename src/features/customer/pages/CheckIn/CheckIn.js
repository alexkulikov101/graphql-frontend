import React from 'react';
import { useCheckIn } from '../hooks/useCheckIn';

export const CheckIn = () => {
  const { checkIn, loading, error, pet } = useCheckIn();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h2>CheckIn:</h2>
      <p>{pet?.id}</p>
      <p>{pet?.name}</p>
      <button type='button' onClick={() => checkIn('C-1')}>
        click
      </button>
    </>
  );
};
