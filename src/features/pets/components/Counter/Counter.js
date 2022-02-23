import React from 'react';
import { useQueryAvailablePets } from '../../hooks';

export const Counter = () => {
  const { availablePets, loading, error } = useQueryAvailablePets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <>{availablePets && <p>{availablePets}</p>}</>;
};
