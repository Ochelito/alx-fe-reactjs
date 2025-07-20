import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <p style={{ fontSize: '1.5rem' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '0 5px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 5px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '0 5px' }}>Reset</button>
    </div>
  );
}

export default Counter;




/* 
1. Create a Simple Counter Application Using State and Hooks
mandatory
Objective: Build a counter application that increments, decrements, and resets a number using the useState hook in React.

Instructions:

Set Up the Counter Component:

Create a new file named Counter.jsx in the src/components folder.
In Counter.jsx, import the useState hook: import { useState } from 'react';.
Define a functional component named Counter.
Implement State Using useState:

Inside Counter, initialize state using useState to keep track of the count. Start the count at 0. const [count, setCount] = useState(0);
Create Buttons for Counter Actions:

Add three buttons to your component: one for incrementing the count, one for decrementing, and one for resetting the count to 0.
Implement onClick handlers for each button that update the state appropriately using setCount.
Display the Current Count:

Add a display element (like a <p> tag) to show the current count.
Final JSX Structure Example:

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
       </div>
     );
   }
Use the Counter in App.jsx:

Import and include the Counter component in your App.jsx.
Run the Application:

Start your application and test the functionality of the counter.
*/