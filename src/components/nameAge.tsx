import { UserInterface } from '../interfaces';

const NameAgeComponent = ({ name, age }: UserInterface) => {
  return (
      <h2>Ime: {name} | Godina: {age}</h2>
  );
};

export default NameAgeComponent;