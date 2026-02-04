import React, { useState } from 'react'
import MouseTracker from './MouseTracker';

export default function ParentComponent() {
    const [showComponent,setShowComponent] = useState(true);

    const toggleComponent = () => {
        setShowComponent((prev) => !prev)
    }
  return (
    <div>
        <button onClick={toggleComponent}>
            {showComponent ? 'Unmount tracker' : 'Mount Tracker'}
        </button>

        {showComponent && <MouseTracker />}
    </div>
  )
}
