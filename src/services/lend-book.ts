import LivroEmprestado from "../interfaces/livro-emprestado"
import livros from "../frontend/storage/livrosEmprestados.json"
import FileHandler from "../repositories/fileHandler";

export const lendBook = (idLivro: string) => {

    let bookIsLent = false;

    livros.forEach((livro) => {
        if(livro.idLivro == idLivro) {
            alert("Livro já está em empréstimo para o usuário");
            bookIsLent = true;
            return;
        }
    });

    if(bookIsLent) return;

    const fileHandler = new FileHandler();

    // fileHandler.setLivrosEmprestados(livros);
    const books = fileHandler.getLivrosEmprestados();
    const thisBook = fileHandler.getLivroById(idLivro);
    books.push(thisBook)
    fileHandler.setLivrosEmprestados(books);

}