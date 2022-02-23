import React from 'react';

import { useQueryAllAvailablePets } from '../../hooks';

export const SpecialList = () => {
  const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button type='button' onClick={getAllAvailablePets}>
        Download Pets
      </button>
      {pets && (
        <>
          {pets.map(({ id, name }) => (
            <div key={id}>
              <p>Name: {name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
