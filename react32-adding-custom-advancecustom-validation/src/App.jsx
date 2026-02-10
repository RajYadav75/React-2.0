import './App.css'
import {useForm} from "react-hook-form";

function App() {
    const {register,watch, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange'
    });
    const onSubmit = (values) => {
        console.log('Form Data', values);
        reset();
    }
    // const validateName = (values) => {
    //     if (values !== 'admin'){
    //         return 'Only Admin  is Allowed';
    //     }
    //     return true;
    // }
    const existingUserName = ['admin', 'user123', 'raj', 'john'];
    const checkIfUserNameExist = async (username) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return existingUserName.includes(username);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:&nbsp; </label>
            <input {...register('name', {
                required: true, minLength: 2, validate: {
                    notAdmin: (values) => values !== 'admin' || 'Admin is not Allowed',
                    isNotNumber: (values) => isNaN(values) || 'Name cannot be number',
                    checkUserName: async (value) => {
                        const exist = await checkIfUserNameExist(value);
                        return !exist || 'username already exists';
                    }
                }
            })} />
            {errors.name && <p>{errors.name.message || "Name is required and must be at least 2 characters"}</p>}
            <br/>
            <br/>
            <br/>
            <label>Email:&nbsp; </label>
            <input {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/
            })} />
            {errors.email && <p>{errors.email.message || "Invalid Email Format."}</p>}
            <br/>
            <br/>
            <br/>
            <label>Password:&nbsp; </label>
            <input type='password' {...register('password', {
                required: true,
                minLength: 6,
            })} />
            {errors.password && <p>{errors.password.message}</p>}
            <br/>
            <br/>
            <br/>
            <label>Confirm Password:&nbsp; </label>
            <input type='password' {...register('confirmPassword', {
                required: true,
                minLength: 6,
                validate: value => value === watch('password') || 'Passwords do not match'
            })} />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <br/>
            <br/>
            <br/>
            <button type="submit">Submit</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button type="button" onClick={() => reset()}>Reset</button>
        </form>
    )
}

export default App
