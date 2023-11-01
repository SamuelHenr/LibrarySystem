import livros from "../src/frontend/storage/livros.json";
import { searchBook } from "../src/services/search-book";
import SearchParameters from "../src/interfaces/search-parameters"
import {expect, describe, it} from '@jest/globals';

describe('testa método de search', () => {
    it('busca vazia deveria retornar nenhum livro', () => {
        const search: SearchParameters = {
            searchInput: "",
            type: "titulo",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })
})