import React, { FC } from 'react';
import { NameAgeType } from '../interfaces';

const NameAge: FC<NameAgeType> = ({ name, age }) => {
  return (
    <>
      <h2>Ime: {name} | Godina: {age}</h2>
    </>
  );
};

export default NameAge;