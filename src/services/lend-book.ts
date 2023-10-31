import LivroEmprestado from "../interfaces/livro-emprestado"
import livros from "../frontend/storage/livrosEmprestados.json"
import FileHandler from "../repositories/fileHandler";

export const lendBook = (idLivro: string) => {

    livros.forEach((livro) => {
        if(livro.idLivro == idLivro) {
            alert("Livro já está em empréstimo para o usuário");
            return;
        }
    });

    const fileHandler = new FileHandler();

    const books = fileHandler.getLivrosFromPath("livros.json");
    console.log(books);

}