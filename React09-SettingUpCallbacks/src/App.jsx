import './App.css'
import ProfileCard from './ProfileCard'
function App()
{
  const handleHobbyClick = (hobby) =>
  {
    alert(`You Clicked On : ${hobby}`)
  }
  return (
    <>
      <div className='app-container'>
        <h1>Hello</h1>
        <ProfileCard
          name='Raj Yadav'
          age='24'
          isMember={true}
          hobbies={['reading', 'coding']}
          onHobbyClick={handleHobbyClick}
        />
        <ProfileCard
          name='Ankita Tiwari'
          age={24}
          isMember={false}
          hobbies={['reading', 'cooking']}
          onHobbyClick={handleHobbyClick}
        />
      </div>
    </>
  )
}

export default App
