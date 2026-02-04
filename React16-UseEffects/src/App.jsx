import { useState, useEffect } from 'react'
import './App.css'

function App()
{
  //  The useEffect hook in React lets you run code automatically
  // when somthing changes or when a component loads

  // It's like setting a task to happen after the screen update
  //  or when certain data is ready

  // SYNTAX: 
  // useEffect(() => {
  //  Code to run
  // },[dependency]);

  // useEffect(() => {}); Run on every render
  // useEffect(() => {},[]); Run only once after the initial render
  // useEffect(() => {},[count]); Run on initial render and when count changes

  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(0);

  // useEffect(() =>
  // {
  //   console.log(`useEffect triggered`)
  // });
  useEffect(() =>
  {
    // document.title = `Count : ${count}`;
    console.log(`useEffect triggered`)
  },[count]);
  const incrementCount = () =>
  {
    setCount(count + 1);
    //document.title = `Count : ${count + 1}`;
  }
  return (
    <div>
      <h1>useEffect Hook </h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={() => setAnotherValue(anotherValue+1)}>Increment</button>
    </div>
  )
}

export default App
