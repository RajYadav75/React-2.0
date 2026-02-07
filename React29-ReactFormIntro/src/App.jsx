import {useState} from 'react'
import './App.css'

function App() {
    const [formData, setFormData] = useState({name: '', email: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErros = validate();
        if (Object.keys(validationErros).length > 0) {
            setErrors(validationErros);
        } else {
            console.log('form data submitted', formData);
            document.write(JSON.stringify(formData));
        }


    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (errors[name]) {
            const newErrors = {...errors};
            delete newErrors[name];
            setErrors(newErrors);
        }
    }

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        return newErrors;
    }

    return (
        <div>
            <h2>Forms In React</h2>
            <form onSubmit={handleSubmit}>
                <label>Name :
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    {errors.name && <p style={{color:'red'}}> {errors.name}</p>}
                </label>
                <br/>
                <label>Email :
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default App
