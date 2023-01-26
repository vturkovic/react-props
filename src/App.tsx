import { UsersType } from './interfaces';
import NameSurname from './components/nameSurname';
import NameAge from './components/nameAge';
import SurnameAge from './components/surnameAge';

const App = () => {

  const users: UsersType = [
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
          <NameSurname key={`NameSurname-${i}`} name={user.name} surname={user.surname} />
        ))}

      <h1>Komponenta 3</h1>
        {users.map((user, i) => (
          <NameAge key={`NameAge-${i}`} name={user.name} age={user.age} />
        ))}

      <h1>Komponenta 4</h1>
        {users.map((user, i) => (
          <SurnameAge key={`SurnameAge-${i}`}>
            {user}
          </SurnameAge>
        ))}
    </>
  );
}
  
export default App;