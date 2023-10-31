import livros from "../frontend/storage/livros.json";
import livrosEmprestados from "../frontend/storage/livrosEmprestados.json";
import Livro from "../interfaces/livro";

class FileHandler {

    getLivroById(idLivro: string): Livro | null {

        let bookFound = null;

        livros.forEach((livro) => {
            if(livro.id == idLivro) {
                bookFound = livro;
                return;
            }
        });

        return bookFound;
    }

    setLivrosEmprestados(livros : any) {
        localStorage.setItem("livrosEmprestados", JSON.stringify(livros));
    }

    getLivrosEmprestados() {
        let books = localStorage.getItem("livrosEmprestados");
        if(books) return JSON.parse(books);
    }
}

export default FileHandler;