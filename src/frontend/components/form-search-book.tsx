import { useForm } from 'react-hook-form'
import '../page-styles.css'
import { searchBook } from '../../services/search-book'
import SearchParameters from "../../interfaces/search-parameters"
import SearchTable from "./search-table"
import { useState } from 'react'
import Livro from "../../interfaces/livro"

export default function FormSearchBook () {
  const { register, handleSubmit } = useForm()
  const [books, setBooks] = useState<Livro[]>([])

  const handleRegister = (fields: any) => {
    const search: SearchParameters = {
      searchInput: fields.search,
      type: fields.type,
      order: fields.order
    }

    var books = searchBook(search);
    setBooks(books);
  }

  return (
    <>
      <form className="form-search-book" onSubmit={handleSubmit(handleRegister)}>

        <label htmlFor="search">Buscar:</label>
        <input id="search" className="ml-5" {...register('search', { required: true })}/>
        
        <br></br>
        <br></br>

        <label htmlFor="type">Tipo de busca:</label>
        <select id="type" className="ml-5" {...register('type', { required: true })}>
          <option value="titulo">Título</option>
          <option value="autor">Autor</option>
          <option value="assunto">Assunto</option>
          <option value="livre">Livre</option>
        </select>

        <input type="submit" className="ml-5" value="Submit" />

        <br></br>
        <br></br>

        <label htmlFor="order">Ordenar por:</label>
        <select id="order" className="ml-5" {...register('order', { required: true })}>
          <option value="titulo">Título</option>
          <option value="autor">Autor</option>
          <option value="publicacao">Data de publicação</option>
        </select>

      </form>

      <br></br>
      <button><a href="/emprestimos" className="remove-layout">Livros emprestados</a></button>
      <br></br>
      <hr></hr>
      <br></br>

      <SearchTable livros = {books}></SearchTable>
    </>
  )
}
