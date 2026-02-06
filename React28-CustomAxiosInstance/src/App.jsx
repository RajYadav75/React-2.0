import axios from 'axios';
import './App.css';
import { useState } from 'react';


const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Authorization': 'Bearer <TOKEN>',
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(request =>
{
  console.log('Starting Request ', request);
  return request;
});

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
