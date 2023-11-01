import LivroEmprestado from "../interfaces/livro-emprestado"
import Livro from "../interfaces/livro"
import FileHandler from "../repositories/fileHandler";
import { checkBooks } from "./renew-book";

export const addDays = (date : Date, add : number) : string => {
    return (new Date(date.setDate(date.getDate() + add))).toLocaleDateString('pt-BR')
}

export const bookIsAlreadyLent = (livrosEmprestados : LivroEmprestado[], idLivro : string) : boolean => {
    let bookIsLent = false;

    livrosEmprestados.forEach((livroEmprestado : LivroEmprestado) => {
        if(livroEmprestado.idLivro == idLivro) {
            bookIsLent = true;
            return;
        }
    });

    return bookIsLent;
}

export const lendBook = (livro: Livro, fileHandler : FileHandler) => {

    let livrosEmprestados = fileHandler.getLivrosEmprestados();

    if(livrosEmprestados) {
        if(bookIsAlreadyLent(livrosEmprestados, livro.id)){
            alert("Livro já está em empréstimo para o usuário");
            return;
        }
    } else livrosEmprestados = [];

    if(checkBooks()) {
        const bookData = fileHandler.getLivroById(livro.id);

        if(bookData) {
    
            const thisBook : LivroEmprestado = {
                idLivro: bookData.id,
                titulo: bookData.titulo,
                entrega: addDays(new Date(), 15),
                limite: 5
            };
        
            livrosEmprestados.push(thisBook);
            fileHandler.setLivrosEmprestados(livrosEmprestados);
            window.location.replace("/emprestimos");
        }
    }

}