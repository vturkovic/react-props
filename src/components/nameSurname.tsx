import { FC } from 'react';
import { NameSurnameType } from '../interfaces';

const NameSurname: FC<NameSurnameType> = ({ name, surname }) => {
  return (
      <h2>Ime: {name} | Prezime: {surname}</h2> 
  );
};

export default NameSurname;