import "./App.css";
import { Profile } from "./components/Profile";

export function App() {
  const users = [
    {
      name: "Tsunode",
      age: 24,
    },
    {
      name: "Nicole",
      age: 27,
    },
    {
      name: "Alysson",
      age: 21,
    },
    {
      name: "Alex",
      age: 32,
    },
  ];

  return (
    <main>
      {users.map((user, index) => (
        <Profile key={index} name={user.name} age={user.age} />
      ))}

      <Profile>
        <h1></h1>
        <h2></h2>
      </Profile>

      <input type="password" id="teste" />
    </main>
  );
}

// class => className
// <input > => <input />
// html => htmlFor
// não pode retornar varios elementos
