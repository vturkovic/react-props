import React, { FC } from 'react';
import { UsersType } from './interfaces';
import NameSurname from './components/nameSurname';
import NameAge from './components/nameAge';
import SurnameAge from './components/surnameAge';

let users: UsersType = [
  {
    name: 'Pero', 
    surname: 'Perić',
    age: 18
  },
  {
    name: 'Ivo', 
    surname: 'Ivić',
    age: 19
  },
  {
    name: 'Marko', 
    surname: 'Markić',
    age: 20
  }
];

const App: FC = () => {

  const nameSurnameUsers = users.map(({ name, surname }) => {
      return {name, surname};
  });

  const nameAgeUsers = users.map(({ name, age }) => {
    return {name, age};
  });

  const surnameAgeUsers = users.map(({ surname, age }) => {
    return {surname, age};
  });

  return (
    <>
      <h1>Komponenta 2</h1>
      {nameSurnameUsers.map((user, i) => (
        <NameSurname key={i} {...user} />
      ))}
      <h1>Komponenta 3</h1>
      {nameAgeUsers.map((user, i) => (
        <NameAge key={i} {...user} />
      ))}
      <h1>Komponenta 4</h1>
      {surnameAgeUsers.map((user, i) => (
        <SurnameAge key={i} {...user} />
      ))}
      <h3>Komponenta 4 - Child Props: {}</h3>
    </>
  );
}
  
export default App;