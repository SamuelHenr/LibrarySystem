import livros from "../src/frontend/storage/livros.json";
import { searchBook } from "../src/services/search-book";
import SearchParameters from "../src/interfaces/search-parameters"
import {expect, describe, it} from '@jest/globals';

describe('teste para busca livre do método search', () => {
    it('busca vazia não deveria retornar nenhum livro', () => {
        const search: SearchParameters = {
            searchInput: "",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca livre não deveria diferenciar maiúsculas e minúsculas', () => {
        const search: SearchParameters = {
            searchInput: "hamlet",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(1);
    })

    it('busca livre não deveria diferenciar acento', () => {
        const search: SearchParameters = {
            searchInput: "Memorias",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(1);
    })

    it('teste por busca livre', () => {
        const search: SearchParameters = {
            searchInput: "de",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(3);
    })

    it('busca livre por uma palavra inexistente deveria retornar vazio', () => {
        const search: SearchParameters = {
            searchInput: "abcd",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca livre por palavras iguais nos dados do mesmo livro não deveria retornar duplicado', () => {
        const search: SearchParameters = {
            searchInput: "1984",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(1);
    })

    it('busca livre deveria encontrar título', () => {
        const search: SearchParameters = {
            searchInput: "Ao Farol",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(1);
    })

    it('busca livre deveria encontrar autor', () => {
        const search: SearchParameters = {
            searchInput: "Isabel Allende",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(1);
    })

    it('busca livre deveria encontrar assunto', () => {
        const search: SearchParameters = {
            searchInput: "Drama",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(2);
    })

    it('busca livre deveria encontrar data de publicação', () => {
        const search: SearchParameters = {
            searchInput: "1881",
            type: "livre",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(1);
    })

})

describe('teste para busca por titulo do método search', () => {
    it('teste de busca por titulo', () => {
        const search: SearchParameters = {
            searchInput: "da",
            type: "titulo",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(3);
    })

    it('teste por titulo inexistente deveria retornar vazio', () => {
        const search: SearchParameters = {
            searchInput: "abcd",
            type: "titulo",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por titulo não deveria encontrar autor', () => {
        const search: SearchParameters = {
            searchInput: "william",
            type: "titulo",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por titulo não deveria encontrar assunto', () => {
        const search: SearchParameters = {
            searchInput: "drama",
            type: "titulo",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por titulo não deveria encontrar data de publicação', () => {
        const search: SearchParameters = {
            searchInput: "1606",
            type: "titulo",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

})

describe('teste para busca por autor do método search', () => {
    it('teste de busca por autor', () => {
        const search: SearchParameters = {
            searchInput: "william",
            type: "autor",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(2);
    })

    it('teste por autor inexistente deveria retornar vazio', () => {
        const search: SearchParameters = {
            searchInput: "abcd",
            type: "autor",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por autor não deveria encontrar título', () => {
        const search: SearchParameters = {
            searchInput: "casa",
            type: "autor",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por autor não deveria encontrar assunto', () => {
        const search: SearchParameters = {
            searchInput: "drama",
            type: "autor",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por autor não deveria encontrar data de publicação', () => {
        const search: SearchParameters = {
            searchInput: "1606",
            type: "autor",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })
})

describe('teste para busca por assunto do método search', () => {
    it('teste de busca por assunto', () => {
        const search: SearchParameters = {
            searchInput: "ficcao",
            type: "assunto",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(2);
    })

    it('teste por assunto inexistente deveria retornar vazio', () => {
        const search: SearchParameters = {
            searchInput: "abcd",
            type: "assunto",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por assunto não deveria encontrar título', () => {
        const search: SearchParameters = {
            searchInput: "casa",
            type: "assunto",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por assunto não deveria encontrar autor', () => {
        const search: SearchParameters = {
            searchInput: "clarice",
            type: "assunto",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })

    it('busca por assunto não deveria encontrar data de publicação', () => {
        const search: SearchParameters = {
            searchInput: "1606",
            type: "assunto",
            order: "titulo"
        };
        var books = searchBook(search);
        expect(books.length).toBe(0);
    })
})