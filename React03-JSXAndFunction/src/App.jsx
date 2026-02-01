// This is comment
/* 
This is multiline comment
*/ 
function WelcomeMessage(name){
  return <h1>Hello, {name} !</h1>;
}

function Greeting(isMorning){
  if(isMorning){
    return <h1>Good Morning!</h1>;
  }
  return <h1>Good Evening!</h1>
}
function AlertBox(message){
  return <div>{message}</div>;
}
function ShowAlert(condition,message){
  if(condition){
    return AlertBox(message);
  }
  return null;
}

function App() {
  const now = new Date();
  const isMorning = now.getHours() < 12;
  return (
    <>
    {/* This is single line comment */}
    {/* 
        this is multiline comment
    */}
      {WelcomeMessage("Raj")}
      {WelcomeMessage("Ankita")}
      {WelcomeMessage("Deepak")}
      {Greeting(isMorning)}
      {ShowAlert(true,"This is important Message")}
    </>
  )
}

export default App
