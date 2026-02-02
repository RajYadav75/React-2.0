import { useState } from 'react'
import './App.css'

function App()
{
  const [formData, setFormData] = useState({
    text: '',
    checkbox: false,
    radio: '',
    select: ''
  });

  const handleChange = (event) =>
  {
    const {name,value,type,checked} =event.target;
    setFormData({
      ...formData,
      [name] : type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className='form-container'>
      <h1>Form Example</h1>
      <form>
        {/* Text Input */}
        <div className="form-field">
          <label>Text : </label>
          <input type="text" name='text' value={formData.next} onChange={handleChange} />
        </div>
        {/* CheckBox */}
        <div className="form-field">
          <label>CheckBox : </label>
          <input type="checkbox" name='checkbox' checked={formData.checked} onChange={handleChange} />
        </div>
        {/* Radio */}
        <div className='form-field'>
          <label>Radio : </label>
          <label >
            <input type="radio" name='radio' value='option1' checked={formData.radio === 'option1'} onChange={handleChange} />
            Option 1
          </label>
          <label >
            <input type="radio" name='radio' value='option1' checked={formData.radio === 'option1'} onChange={handleChange} />
            Option 2
          </label>
        </div>
        {/* DropDown Select */}
        <div className="form-field">
          <label>Select : </label>
          <select name='select' value={formData.select} onChange={handleChange}>
            <option value="">-- choose an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div className='form-data'>
          <h3>Form Data</h3>
          <p>
            <strong>Text : </strong>{formData.text || 'N/A'} 
          </p>
          <p>
            <strong>Radio : </strong>{formData.radio || 'N/A'} 
          </p>
          <p>
            <strong>CheckBox : </strong>{formData.checkbox ? 'Checked' : 'UnChecked'} 
          </p>
          <p>
            <strong>Select : </strong>{formData.select} 
          </p>
        </div>
      </form>
    </div>
  )
}

export default App
