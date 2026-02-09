import React, {useEffect, useState} from 'react';

function NormalForm() {
    const [formData, setFormData] = useState({name: '', email: ''});

    useEffect(() => {
        console.log('Basic Form Rendered');
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted : ', formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange}/>
            <br/>
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange}/>
            <br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default NormalForm;