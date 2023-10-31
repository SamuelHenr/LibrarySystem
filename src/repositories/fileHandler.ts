import livros from "../frontend/storage/livros.json";
import livrosEmprestados from "../frontend/storage/livrosEmprestados.json";
import Livro from "../interfaces/livro";
import * as fs from 'fs';

class FileHandler {

    storagePath = "../frontend/storage/";

    getLivroById(idLivro: string): Livro | null {

        livros.forEach((livro) => {
            if(livro.id == idLivro) return livro;
        });

        return null;
    }

    getLivrosFromPath(path: string) {
        const loadedConfig = fs.readFileSync(this.storagePath + path, {
            encoding: 'utf-8',
        });
        return JSON.parse(loadedConfig);
    }
}

export default FileHandler;