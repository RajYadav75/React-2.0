import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  },[]);
  return (
    <div>
      <h1>API's</h1>
      <ul>
        {data.map((post)=>(
          <dl key={post.id}>
              <dt> <strong>{post.id}. {post.title}</strong></dt>
              <dd>{post.body}</dd>
            </dl>
        ))}
      </ul>
    </div>
  )
}

export default App
