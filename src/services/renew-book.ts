import LivroEmprestado from "../interfaces/livro-emprestado";
import {addDays} from "./lend-book";
import FileHandler from "../repositories/fileHandler";

export const formatDateStringToObject = (date : string) : Date => {
    const [day, month, year] = date.split("/");
    return (new Date(parseInt(year), parseInt(month)-1, parseInt(day)));
}

export const checkBooks = () : boolean => {
    const todayTimestamp = (new Date()).toLocaleDateString();
    let userIsFree = true;
    const fileHandler = new FileHandler();
    let livrosEmprestados = fileHandler.getLivrosEmprestados();

    if(livrosEmprestados) {
        livrosEmprestados.forEach((livroEmprestado : LivroEmprestado) => {
            if(formatDateStringToObject(livroEmprestado.entrega).getTime() < formatDateStringToObject(todayTimestamp).getTime()) {
                alert("Usuário está pendente! Devolva o livro pendente primeiro!");
                userIsFree = false;
                return;
            }
        });
    }

    return userIsFree;
}

export const renewBook = (livro: LivroEmprestado) => {

    if(checkBooks()) {

        const fileHandler = new FileHandler();
        let livrosEmprestados = fileHandler.getLivrosEmprestados();
    
        if(livrosEmprestados) {
            livrosEmprestados.forEach((livroEmprestado : LivroEmprestado) => {
                if(livroEmprestado.idLivro == livro.idLivro) {
                    if(livroEmprestado.limite > 0) {
                        livroEmprestado.entrega = addDays(formatDateStringToObject(livroEmprestado.entrega), 15);
                        livroEmprestado.limite--;
                        fileHandler.setLivrosEmprestados(livrosEmprestados);
                        window.location.replace("/emprestimos");
                    } else {
                        alert("Limite de renovações atingida!");
                    }
                }
            });
        }

    }

}

export const returnBook = (livro: LivroEmprestado) => {

    const fileHandler = new FileHandler();
    let livrosEmprestados = fileHandler.getLivrosEmprestados();

    for(var i = 0; i < livrosEmprestados.length; i++) {
        var livroEmprestado = livrosEmprestados[i];
        if(livroEmprestado.idLivro == livro.idLivro) {
            livrosEmprestados.splice(i, 1);
            fileHandler.setLivrosEmprestados(livrosEmprestados);
            window.location.replace("/emprestimos");
            break;
        }
    }

}