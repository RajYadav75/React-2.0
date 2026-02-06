import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
function App()
{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>
  {
    setLoading(true);
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ]).then(axios.spread((posts,users) =>
    {
      console.log(posts);
      console.log(users);
      setData(posts.data);
      setLoading(false);
      // throw new Error('Something went wrong');
    }))
      .catch((error) =>
      {
        console.error(`Error Fetching Data `, error);
        setError('Failed to fetch the data');
        setLoading(false);
      })
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <h1>API's</h1>
      <ul>
        {data.map((post) => (
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
