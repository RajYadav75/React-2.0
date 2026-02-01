import './App.css'
import ProfileCard from './ProfileCard'
function App(){
  return (
    <>
      <div>
        <h1>Hello</h1>
        <ProfileCard name='Raj Yadav' age='24' isMember={true} hobbies={['reading','coding']}/>
        <ProfileCard name='Ankita Tiwari' age={24} isMember={false} hobbies={['reading','cooking']} />
      </div>
    </>
  )
}

export default App
