import React, { useState, useEffect } from "react";
import Person from "./person";

function PersonController() {
  const [person, setPerson] = useState(null);

  // Function to fetch random user data
  const getPerson = async () => {
    try {
      const res = await fetch("https://randomuser.me/api?results=1");
      const data = await res.json();
      console.log(data); // Log the entire response
      const user = data.results[0]; // Get the first user
      console.log(user); // Log the user data
      setPerson(user); // Set the user in state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call getPerson when the component first mounts
  useEffect(() => {
    getPerson();
  }, []); // Empty dependency array means it will only run once when the component mounts

  return (
    <div>
      {person ? (
        <Person person={person} /> // Pass the person data to the Person component
      ) : (
        <p>Loading...</p> // Show loading until data is fetched
      )}
      <button onClick={getPerson}>Get New Person</button>
    </div>
  );
}

export default PersonController;
