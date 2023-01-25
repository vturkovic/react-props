import React, { FC } from 'react';
import { SurnameAgeType } from '../interfaces';

const SurnameAge: FC<SurnameAgeType> = ({ surname, age }) => {
  return (
    <>
      <h2>Prezime: {surname} | Godina: {age}</h2>
    </>
  );
};

export default SurnameAge;