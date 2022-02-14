import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

// Init Side Effect with Arrow Function & no Arguments
  useEffect(() => { 
    // set const arrow function as intervalId inside previous anonymous function (line 7)
    const intervalId = setInterval(() => {
      // Set Timeout api call with two args
      // incrementing previous value and 1 sec interval for setTime
      setTime((prev) => prev + 1);
      }, 1000);

      // JS function to clear the timer. more about setInterval, clearInterval in W3School
      return () => {
      clearInterval(intervalId);
    };
    }, []);


  // Simple State Change :)
  const handleChange = ({target}) => {
    setName(target.value);
  }

  return (
    <>
      <h1>Time: {time}</h1>
      <input type="text" onChange={handleChange} value={name} />
    </>
  );
}


