import './App.css'




function App()
{

  const isLoggedIn = true;

  /*if (isLoggedIn) {
    return (
      <h1>Welcome Back</h1>
    )
  }
  return (
    <>
      <h1>Please Login</h1>
    </>
  )*/

  const element = <h1>{isLoggedIn ? "Welcome Back !" : "Please Login"}</h1>

  const messages = ["1", "1", "1", "1", "1", "1", "1", "1", "1"];
  return (
    <div>
      {element}
      {/* In && operator in js if left side expression is true then right side of retured  */}
      {messages.length > 0 && <h2>You Have {messages.length} unread messages</h2>}
    </div>
  )
}

export default App
