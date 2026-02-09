import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

function HookForm() {
    const {register, handleSubmit} = useForm();
    useEffect(() => {
        console.log('Hook form rendered');
    });

    const onSubmit = (data) => console.log('Form Data Submitted ', data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input {...register('name')} /><br/>
            <label>Email</label>
            <input {...register('email')} /><br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default HookForm;

