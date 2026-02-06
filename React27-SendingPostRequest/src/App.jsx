import axios from 'axios';
import './App.css';
import { useState } from 'react';
// Request Interceptor
axios.interceptors.request.use(request => {
  // console.log(`Starting Request`);
  console.log(`Starting Request`,request);
  return request;
});

// Response Interceptor
axios.interceptors.response.use(response => {
  console.log(`Response `,response);
  return response;
  
})
function App()
{
  const [data,setData] = useState();
  const handleSubmit = (event) =>{
    event.preventDefault(); 
    const newPost = {
      title:'Foo',
      body:'bar',
      userId:1
    }

    axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
    .then(response => {
      console.log('New Post Added : ',response.data);
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
