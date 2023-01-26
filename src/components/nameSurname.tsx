import { UserInterface } from '../interfaces';

const NameSurnameComponent = ({ name, surname }: UserInterface) => {
  return (
      <h2>Ime: {name} | Prezime: {surname}</h2> 
  );
};

export default NameSurnameComponent;