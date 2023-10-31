import { useForm } from 'react-hook-form'
import '../page-styles.css'

export default function FormSearchBook () {
  const { register, handleSubmit } = useForm()

  const handleRegister = (fields: any) => {
    console.log(fields);
  }

  return (
    <form className="form-search-book" onSubmit={handleSubmit(handleRegister)}>

      <label htmlFor="search">Buscar:</label>
      <input id="search" className="ml-5" {...register('search', { required: true })}/>
      
      <br></br>
      <br></br>

      <label htmlFor="type">Tipo de busca:</label>
      <select id="type" className="ml-5" {...register('type', { required: true })}>
        <option value="Title">Título</option>
        <option value="Author">Autor</option>
        <option value="Topic">Assunto</option>
        <option value="Free">Livre</option>
      </select>

      <input type="submit" className="ml-5" value="Submit" />

      <br></br>
      <br></br>

      <label htmlFor="order">Ordenar por:</label>
      <select id="order" className="ml-5" {...register('order', { required: true })}>
        <option value="Title">Título</option>
        <option value="Author">Autor</option>
        <option value="Topic">Data de publicação</option>
      </select>

    </form>
  )
}
