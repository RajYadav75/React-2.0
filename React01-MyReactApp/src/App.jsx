import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const element = <h1>Hello Raj</h1>

  //1. You can embed any valid JavaScript expression inside curly braces {} in JSX
  //2. JSX attribute use camelCase syntax
  const name = "Raj";
  const buttonText = "Click Me !"
  const imageUrl = 'https://placehold.co/100x100';
  return (
    <>
      <h2 className='greeting'>Hello, {name} </h2>
      <button style={{backgroundColor:'green',color:'white'}}>{buttonText}</button>
      <button onClick={()=> alert('button Clicked')}>Alert Me</button>
      <img src={imageUrl} alt="Dynamic Image" />
      {element}
    </>
  )
}

export default App
