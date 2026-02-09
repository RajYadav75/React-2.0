import React from 'react';
import {useForm} from "react-hook-form";

function ManagingFormReset() {
    const {reset, formState: {errors}, register, handleSubmit} = useForm();

    const onSubmit = (e) => {
        console.log('Form Data :: ', e)
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input {...register('name', {required: true, minLength: 2})}/>
            </label>
            {errors.name && <p>Name is required and must be at least 3 character long</p>}
            <br/>
            <label>
                Email:
                <input {...register('email', {required: true})} />
            </label>
            {errors.email && <p>Email is required.</p>}
            <br/>
            <button type='submit'>Submit</button>
            {/*<button type='reset'>Reset</button>*/}
            {/*<button onClick={() => reset()}>Reset</button>*/}
        </form>
    );
}

export default ManagingFormReset;