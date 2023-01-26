import { UserInterface } from './interfaces';
import NameSurnameComponent from './components/nameSurname'; // Naming konvencija je da svakoj komponenti dodamo Component na kraju, ne mora biti u nazivu file ali nazivu komponente da//
import NameAgeComponent from './components/nameAge';
import SurnameAgeComponent from './components/surnameAge';

const App = () => {

  const users: UserInterface[] /*Ovako mu kažeš da je Array */ = [
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

  return (
    <>
      <h1>Komponenta 2</h1>
        {users.map((user, i) => (
          <NameSurnameComponent key={i} // Dovoljan je i za unique key
            name={user.name}
            surname={user.surname}
          />
        ))}

      <h1>Komponenta 3</h1>
        {users.map((user, i) => (
          <NameAgeComponent key={i}
            name={user.name}
            age={user.age}
          />
        ))}

      <h1>Komponenta 4</h1>
        {users.map((user, i) => (
          <SurnameAgeComponent key={i}>
            {user}
          </SurnameAgeComponent>
        ))}
    </>
  );
}
  
export default App;