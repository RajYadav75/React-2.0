import { useState } from 'react'
import './App.css'

function App()
{
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1);

  const incrementCount = () =>
  {
    setCount(count + step);
  }

  const decrementCount = () =>
  {
    setCount(count - step);
  }

  const incrementTwice = () =>
  {
    // State updates are async
    // You need to use updater function for mulitple state updates
    setCount(prevCount => prevCount + 1);
    setCount(count => count + 1);
  }
  return (
    <div className='app-container'>
      <h3>Counter Value ::  {count}</h3>
      <input type="number" value={step} onChange={(e) => setStep(parseInt(e.target.value))} />
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrease</button>
      <button onClick={incrementTwice}>+2</button>
    </div>
  )
}

export default App
