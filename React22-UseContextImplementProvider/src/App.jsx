import { createContext, useState } from 'react'
import './App.css'
import { useContext } from 'react';
// - App = Data  Has Theme
//   - ComponentA 
//    - ComponentB
//     - ThemedComponent =  Needs Theme

//  Create a Context: 
// const MyContext = createContext(defaultValue);

// Consume the Context:
//  const contextValue  = useContext(MyContext);

// Provide the Context
// <MyContext.Provider value = {someValue}>
//  <ComponentA />
// </MyContext.Provider>
const ThemeContext = createContext('light');
function App()
{
  const [theme,setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light'?'dark':'light'));
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h1>App (Parent)</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  )
}

function ComponentA()
{
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1>ComponentA  (Child)</h1>
      <ComponentB />
    </div>
  )
  function ComponentB()
  {
    return (
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h1>ComponentB   (Child)</h1>
        <ThemedComponent />
      </div>
    )
  }
  function ThemedComponent()
  {
    const theme = useContext(ThemeContext);
    return (
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h1>ThemedComponent  (Child)</h1>
        <div>The current theme is : {theme}</div>
      </div>
    )
  }
}

export default App;
