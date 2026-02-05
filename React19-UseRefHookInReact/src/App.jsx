import Another from './Another';
import './App.css'
import { useEffect, useRef, useState } from 'react';
// useRef 
// - persist vales across renders
// - Does not cause the component to re-render when the value changes
function App() {
  // const myRef = useRef('Hello World!');
  // {
  //   current:"Hello World!"
  // }
  // console.log(myRef);

  const [stateCount,setStateCount] = useState(0);
  const refCount = useRef(0);
  useEffect(()=>{
    console.log(`Component Re-Render`);
    
  },[])

  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
  }

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(`Ref Count : ${refCount.current}`);
  }
  return (
    <div>
      {/* <h1>Learn React {myRef.current}</h1> */}
      <p>State Count : {stateCount}</p>
      <button onClick={incrementStateCount}>Increment State Count</button><br/>
      <p>Ref Count : {refCount.current}</p>
      <button onClick={incrementRefCount}>Increment Ref Count</button>
      <div>
        <Another />
      </div>
    </div>
  )
}

export default App
