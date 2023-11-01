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

export const formatBook = (livro: Livro | null) => {
    if(livro) {

        if(parseInt(livro.reserva) <= 0) return;

        const thisBook : LivroEmprestado = {
            idLivro: livro.id,
            titulo: livro.titulo,
            entrega: addDays(new Date(), 15),
            limite: 5
        };

        return thisBook;
    }
}

export const lendBook = (livro: Livro, fileHandler : FileHandler) => {

    let livrosEmprestados = fileHandler.getLivrosEmprestados();
    if(!livrosEmprestados) livrosEmprestados = [];

    if(bookIsAlreadyLent(livrosEmprestados, livro.id)){
        alert("Livro já está em empréstimo para o usuário");
        return;
    }

    if(!checkBooks(livrosEmprestados)) {
        alert("Usuário está pendente! Devolva o livro pendente primeiro!");
        return;
    }

    livrosEmprestados.push(formatBook(fileHandler.getLivroById(livro.id)));
    fileHandler.setLivrosEmprestados(livrosEmprestados);
    window.location.replace("/emprestimos");
 
}