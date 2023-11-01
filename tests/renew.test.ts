import { formatDateStringToObject, checkBooks, removeSelectedBook } from "../src/services/renew-book";
import {expect, describe, it} from '@jest/globals';
import livrosEmprestados from "./data/livros-emprestados.json";
import LivroEmprestado from "../src/interfaces/livro-emprestado";

describe('teste da função formatar data para objeto Date', () => {
    it('dia válido deveria ser formatado', () => {
      expect(formatDateStringToObject("01/11/2023")).toBeInstanceOf(Date);
    })

    it('dia com formatação errada não deveria retornar', () => {
      const date = formatDateStringToObject("01-11-2023");
      expect(date.getDate()).toBeNaN();
    })
})

describe('teste da função de conferir se usuário tem livros pendentes', () => {
  it('usuário sem nenhum livro emprestado não está pendente', () => {
    expect(checkBooks([], 1)).toBe(true);
  })

  it('usuário sem livro para entregar não está pendente', () => {
    expect(checkBooks(livrosEmprestados, formatDateStringToObject((new Date(2023, 10, 1)).toLocaleDateString('pt-BR')).getTime())).toBe(true);
  })

  it('usuário com livro para entregar ontem não está pendente', () => {
    expect(checkBooks(livrosEmprestados, formatDateStringToObject((new Date(2023, 10, 9)).toLocaleDateString('pt-BR')).getTime())).toBe(true);
  })

  it('usuário com livro para entregar hoje não está pendente', () => {
    expect(checkBooks(livrosEmprestados, formatDateStringToObject((new Date(2023, 10, 10)).toLocaleDateString('pt-BR')).getTime())).toBe(true);
  })

  it('usuário com livro para entregar amanhã está pendente', () => {
    expect(checkBooks(livrosEmprestados, formatDateStringToObject((new Date(2023, 10, 11)).toLocaleDateString('pt-BR')).getTime())).toBe(false);
  })

})

describe('teste da função de devolver livro de usuário', () => {
  it('usuário sem livros emprestados não irá devolver nenhum', () => {
    expect(removeSelectedBook([], "1")).toStrictEqual([]);
  })

  it('usuário não pode devolver livro que não está com ele', () => {
    expect(removeSelectedBook(livrosEmprestados, "4")).toStrictEqual(livrosEmprestados);
  })

  it('livro devolvido deve ser removido do empréstimo do usuário', () => {

    const livrosDevolvidos : LivroEmprestado[] = [
      {
          "idLivro": "2",
          "titulo": "titulo 2",
          "entrega": "11/11/2023",
          "limite": 5
      },
      {
          "idLivro": "3",
          "titulo": "titulo 3",
          "entrega": "12/11/2023",
          "limite": 5
      }
    ];

    expect(removeSelectedBook(livrosEmprestados, "1")).toStrictEqual(livrosDevolvidos);
  })

})