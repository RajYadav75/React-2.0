import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

function HookForm() {
    const [register, handleSumbit,] = useForm();
    useEffect(() => {
        console.log('Hook form rendered');
    });

    const onSubmit = (data) => {
        console.log('Form Data Sumbitted ', data);
    }
    return (
        <form onSubmit={handleSumbit(onSubmit)}>
            <label htmlFor="">Name</label>
            <input {...register('name')} /><br/>
            <label htmlFor="">Email</label>
            <input {...register('email')} /><br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default HookForm;

