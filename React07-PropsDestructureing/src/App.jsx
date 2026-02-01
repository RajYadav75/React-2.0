import './App.css'
import ProfileCard from './ProfileCard'
function App() {

  // eslint-disable-next-line no-unused-vars
  const person = {name:"Raj Yadav",age:30};

  //Without destructuring, Using Dot Notation
  // const name = person.name;
  // const age = person.age;

  //With Destructuring
  // const {name,age} = person; 
  return(
    <div>
      <h1>Hello</h1>
      <ProfileCard name='Raj Yadav' age='24' isMember={true} />
      <ProfileCard name='Ankita Tiwari' age={24} isMember={false} />
    </div>
  )
}

export default App
