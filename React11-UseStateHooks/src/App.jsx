import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step,setStep] = useState(1);

  const incrementCount = () => {
    setCount(count + step);
  }

  const decrementCount = () => {
    setCount(count - step);
  }

  return (
    <div className='app-container'>
      <h3>Counter Value ::  {count}</h3>
      <input type="number" value={step} onChange={(e) => setStep(parseInt(e.target.value))}/>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount }>Decrease</button>
      {/* <button onClick={() => setCount(count+1) }>Increase</button>
      <button onClick={() => setCount(count-1) }>Decrease</button> */}
    </div>
  )
}

export default App
