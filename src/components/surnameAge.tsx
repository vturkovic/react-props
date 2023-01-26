import { UserInterface } from '../interfaces';

const SurnameAgeComponent = ({ children }: UserInterface) => {
  console.log(children);
  return (
      <h2>Prezime: {children?.surname} | Godina: {children?.age}</h2>
  );
};

export default SurnameAgeComponent;