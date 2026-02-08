import './App.css'
import {useForm} from "react-hook-form";
import {useEffect} from "react";

function App() {
  const {register,handleSubmit,watch} = useForm(0)
    const onSubmit = (data) => console.log(data)

    const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(() => {
      console.log('Watched Name:', watchedName);
  },[watchedName]);
  useEffect(() => {
      console.log('Watched Email:', watchedEmail);
  },[watchedEmail]);
  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <label>
          Name:
            <input {...register('name')} />
        </label>
          <br/>

        <label>
          Email:
            <input {...register('email')} />
        </label>
          <br/>
          <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
