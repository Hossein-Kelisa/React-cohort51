import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState(null)

  //function to fetch data from the API
  const getPerson = async () => {
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    const user = data.results[0]
    setPerson(user);
  };
 
  // useEffect to call getPerson ONCE
  useEffect(() => {
    getPerson();
  }, []);

  // optional: console.log to see the data
  console.log(person);

  // If person is not loaded yet, show nothing
  if (!person) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Person</h1>
      <ul>
        <li>First Name: {person.name.first}</li>
        <li>Last Name: {person.name.last}</li>
        <li>Email: {person.email}</li>
      </ul>
    </div>
  );
}

export default App;
