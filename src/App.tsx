import { UserInterface } from './interfaces';
import NameSurnameComponent from './components/nameSurname';
import NameAgeComponent from './components/nameAge';
import SurnameAgeComponent from './components/surnameAge';

const App = () => {

  const users: UserInterface[] = [
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
          <NameSurnameComponent key={`NameSurname-${i}`} name={user.name} surname={user.surname} />
        ))}

      <h1>Komponenta 3</h1>
        {users.map((user, i) => (
          <NameAgeComponent key={`NameAge-${i}`} name={user.name} age={user.age} />
        ))}

      <h1>Komponenta 4</h1>
        {users.map((user, i) => (
          <SurnameAgeComponent key={`SurnameAge-${i}`}>
            {user}
          </SurnameAgeComponent>
        ))}
    </>
  );
}
  
export default App;