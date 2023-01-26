import { FC } from 'react';
import {  SurnameAgeTypeProps } from '../interfaces';

const SurnameAge: FC<SurnameAgeTypeProps> = ({ children }) => {
  console.log(children);
  return (
      <h2>Prezime: {children?.surname} | Godina: {children?.age}</h2>
  );
};

export default SurnameAge;