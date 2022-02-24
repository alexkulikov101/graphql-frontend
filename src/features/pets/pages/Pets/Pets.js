import React from 'react';

import { Counter } from '../../components/Counter';
import { List } from '../../components/List';
import { SpecialList } from '../../components/SpecialList';
import { Profile } from '../../components/Profile';

export const Pets = () => {
  return (
    <>
      <h1>Pets</h1>
      <Profile />
      <Counter />
      <SpecialList />
      <List />
    </>
  );
};
