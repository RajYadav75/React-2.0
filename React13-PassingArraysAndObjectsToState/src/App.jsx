import { useState } from 'react'
import './App.css'

function App()
{
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);
  //  You can store arrays objects or even more complex data structure in state
  // Counter = {id:1,value:0}
  // When 1 Counter = [{ id: 1, value: 0 }]
  // When 2 Counter = [{ id: 1, value: 0 },{ id: 2, value: 0 }]
  // When 3 Counter = [{ id: 1, value: 0 },{ id: 2, value: 0 },{ id: 3, value: 0 }]
  const addCounter = () =>
  {
    setCounters([...counters, { id: counters.length + 1, value: 0 }])
  }
  const incrementCounter = (id) =>
  {
    setCounters(counters.map(counter =>
      counter.id === id ? {...counter,value: counter.value+1} : counter
    )
  );
  };
  return (
    <div className='app-container'>
      <button onClick={addCounter}>Add Counter</button>
      <ul>
        {counters.map((counter => (
          <li key={counter.id}>{counter.id} : {counter.value} <button onClick={() => incrementCounter(counter.id)}>Increment</button></li>
        )))}
      </ul>
    </div>
  )
}

export default App
