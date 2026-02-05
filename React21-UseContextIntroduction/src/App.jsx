import { createContext } from 'react'
import './App.css'
import { useContext } from 'react';
// - App = Data  Has Theme
//   - ComponentA 
//    - ComponentB
//     - ThemedComponent =  Needs Theme

//  Create a Context: 
// const myContext = createContext(defaultValue);

// Consume the Context:
//  const contextValue  = useContext(myContext);
const ThemeContext = createContext('light');
function App()
{
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1>App (Parent)</h1>
      <ComponentA  />
    </div>
  )
}

function ComponentA()
{
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1>ComponentA  (Child)</h1>
      <ComponentB  />
    </div>
  )
  function ComponentB()
  {
    return (
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h1>ComponentB   (Child)</h1>
        <ThemedComponent  />
      </div>
    )
  }
  function ThemedComponent()
  {
    const theme = useContext(ThemeContext);
    return (
      <div style={{border:'2px solid black',padding:'20px'}}>
        <h1>ThemedComponent  (Child)</h1>
        <div>The current theme is : {theme}</div>
      </div>
    )
  }
}

  export default App;
