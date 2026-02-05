
import './App.css'
import UseCounter from './UseCounter'

// Custom hooks in React are funtions that let you reuse \
// logic across Multiple Component

// Start with 'use..."

function App() {
  const {count,incrementCount,decrementCount}  = UseCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default App
