import './App.css'
// -App = Data
//   -ComponentA 
//    -ComponentB
//     -ThemedComponent =  Needs Theme

function App()
{

  const theme = 'dark';

  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1>App (Parent)</h1>
      <ComponentA theme={theme} />
    </div>
  )
}

function ComponentA({ theme })
{
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1>ComponentA  (Child)</h1>
      <ComponentB theme={theme} />
    </div>
  )
  function ComponentB({ theme })
  {
    return (
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h1>ComponentB   (Child)</h1>
        <ComponentB theme={theme} />
      </div>
    )
  }
  function ThemedComponent({ theme })
  {
    return (
      <div style={{border:'2px solid black',padding:'20px'}}>
        <h1>ThemedComponent  (Child)</h1>
        <div>The current theme is : {theme}</div>
      </div>
    )
  }

  export default App
