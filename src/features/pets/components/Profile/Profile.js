import React from 'react';

import { useQueryProfile } from '../../hooks/useQueryProfile';

export const Profile = () => {
  const { getPetProfile, loading, error, profile } = useQueryProfile();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const payload = {
    variables: {
      id: 'C-1',
    },
  };

  return (
    <>
      <h2>Profile:</h2>

      <button type='button' onClick={() => getPetProfile(payload)}>
        Get Profile
      </button>

      {profile && <p>{profile.name}</p>}
    </>
  );
};
