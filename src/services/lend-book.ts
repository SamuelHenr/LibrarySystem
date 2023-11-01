import LivroEmprestado from "../interfaces/livro-emprestado"
import Livro from "../interfaces/livro"
import FileHandler from "../repositories/fileHandler";
import { checkBooks } from "./renew-book";

export const addDays = (date : Date, add : number) : string => {
    return (new Date(date.setDate(date.getDate() + add))).toLocaleDateString()
}

export const lendBook = (livro: Livro) => {

    let bookIsLent = false;
    const fileHandler = new FileHandler();
    let livrosEmprestados = fileHandler.getLivrosEmprestados();

    if(livrosEmprestados) {
        livrosEmprestados.forEach((livroEmprestado : LivroEmprestado) => {
            if(livroEmprestado.idLivro == livro.id) {
                alert("Livro já está em empréstimo para o usuário");
                bookIsLent = true;
                return;
            }
        });
        if(bookIsLent) return;
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