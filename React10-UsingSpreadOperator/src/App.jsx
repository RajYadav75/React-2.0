import './App.css'
import ProfileCard from './ProfileCard'
function App()
{
  const handleHobbyClick = (hobby) =>
  {
    alert(`You Clicked On : ${hobby}`)
  }
  const rajProfile = {
    name: 'Raj Yadav',
    age: '24',
    isMember: true,
    hobbies: ['reading', 'coding'],
    onHobbyClick: handleHobbyClick,
  };
  const ankitaProfile = {
    name: 'Ankita Tiwari',
    age: '24',
    isMember: false,
    hobbies: ['reading', 'cooking'],
    onHobbyClick: handleHobbyClick,
  }
  return (
    <>
      <div className='app-container'>
        <h1>Hello</h1>
        <ProfileCard {...rajProfile}/>
        <ProfileCard {...ankitaProfile}/>
      </div>
    </>
  )
}

export default App
