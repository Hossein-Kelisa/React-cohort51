// src/Counter.jsx
import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);  // Initialize state for count

  // Feedback message based on the count
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <Count count={count} /> {/* Pass count to Count component */}
      <Button onClick={() => setCount(count + 1)} /> {/* Pass function to Button component */}
      <p>{feedback}</p> {/* Show feedback */}
    </div>
  );
};

export default Counter;
