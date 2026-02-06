import api from './api/api';
import './App.css';
import { useState } from 'react';


function App()
{
  const [data, setData] = useState();
  const handleSubmit = (event) =>
  {
    event.preventDefault();
    const newPost = {
      title: 'Foo',
      body: 'bar',
      userId: 1
    }

    api.post('/posts', newPost)
      .then(response =>
      {
        console.log('New Post Added : ', response.data);
        setData([response.data]);
      })
  }
  return (
    <div>
      <h1>API's In React</h1>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  )
}

export default App
