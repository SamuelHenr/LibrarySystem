import { useForm } from 'react-hook-form'
import '../page-styles.css'

export default function FormSearchBook () {
  const { register, handleSubmit } = useForm()

  const handleRegister = (fields: any) => {
    console.log(fields);
  }

  return (
    <form className="form-search-book" onSubmit={handleSubmit(handleRegister)}>

      <label htmlFor="search">Search:</label>
      <input id="search" className="ml-5" {...register('search', { required: true })}/>
      <br></br>
      <br></br>
      <label htmlFor="type">Search type:</label>
      <select id="type" className="ml-5" {...register('type', { required: true })}>
        <option value="Title">Title</option>
        <option value="Author">Author</option>
        <option value="Free">Free</option>
      </select>

      <input type="submit" className="ml-5" value="Submit" />
    </form>
  )
}
