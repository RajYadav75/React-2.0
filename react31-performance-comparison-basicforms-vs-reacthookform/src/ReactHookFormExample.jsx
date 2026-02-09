import React from 'react';
import {useForm} from "react-hook-form";

function ReactHookFormExample() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (e) => console.log(e);
    return (
        <div>
            <h1>React Hook Form By Raj</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input {...register("name")} />
                    </dd>
                    <dt>Phone</dt>
                    <dd>
                        <input {...register("phone")} />
                    </dd>
                    <dt>Email</dt>
                    <dd>
                        <input {...register("email")} />
                    </dd>
                </dl>
                <dl>
                    <dt>Gender</dt>
                    <dd>
                        <select{...register("gender")}>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="gay">Gay</option>
                        </select>
                    </dd>
                    <dt>
                        <input type="submit"/>
                    </dt>
                </dl>


            </form>
        </div>
    );
}

export default ReactHookFormExample;