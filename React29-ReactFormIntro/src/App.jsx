import { useState } from 'react'
import './App.css'

function App()
{
  const [formData, setFormData] = useState({ name: '' ,email:''});

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log('form data submitted',formData);
    
  }

  const handleChange = (e) =>
  {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  }

  return (
    <div>
      <h2>Forms In React</h2>
      <form onSubmit={handleSubmit}>
        <label>Name :
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
