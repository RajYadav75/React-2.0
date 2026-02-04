import { useEffect, useState } from 'react'
import './App.css'

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({x:0,y:0});

  useEffect(()=>{
    const handleMouseMove = (e) => {
      setMousePosition({x: e.clientX,y: e.clientY});
    }
    window.addEventListener(`mousemove`,handleMouseMove);
    console.log(`Mouse move listener added`);

    return () => {
      window.removeEventListener(`mousemove`,handleMouseMove);
      console.log(`Mouse move listener remove`);
    }
  },[])


  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  )
}

export default MouseTracker
