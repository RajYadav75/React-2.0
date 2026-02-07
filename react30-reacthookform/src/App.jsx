import './App.css'
import {useForm} from "react-hook-form";

function App() {
  const {register,handleSubmit} = useForm(0)
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
            <input {...register('name')} />
        </label>

        <label>
          Email:
            <input {...register('email')} />
        </label>
          <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
