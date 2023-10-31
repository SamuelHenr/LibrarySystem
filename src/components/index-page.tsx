import FormSearchBook from "./components/form-search-book"
import SearchTable from "./components/search-table"

export default function IndexPage () {

  return (
    <div >
      <h1>Sistema de biblioteca</h1>
      <FormSearchBook></FormSearchBook>
      <br></br>
      <button><a href="/emprestimos" className="remove-layout">Livros emprestados</a></button>
      <br></br>
      <hr></hr>
      <br></br>
      <SearchTable></SearchTable>
    </div>
  )
}
