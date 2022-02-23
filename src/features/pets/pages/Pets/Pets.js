import React from 'react';

import { Counter } from '../../components/Counter';
import { List } from '../../components/List';
import { SpecialList } from '../../components/SpecialList';

export const Pets = () => {
  return (
    <>
      <h1>Pets</h1>
      <Counter />
      <SpecialList />
      <List />
    </>
  );
};
