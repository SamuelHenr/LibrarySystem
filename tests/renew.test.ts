import { formatDateStringToObject, checkBooks, removeSelectedBook } from "../src/services/renew-book";
import {expect, describe, it} from '@jest/globals';
import livrosEmprestados from "./data/livros-emprestados.json";

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
  it('usuário sem nenhum livros emprestados não está pendente', () => {
    expect(checkBooks([], 1)).toBe(true);
  })

  it('usuário com livro para entregar está pendente', () => {
    expect(checkBooks(livrosEmprestados, formatDateStringToObject((new Date(2023, 11, 1)).toLocaleDateString('pt-BR')).getTime())).toBe(false);
  })

  it('usuário sem livro para entregar não está pendente', () => {
    expect(checkBooks(livrosEmprestados, formatDateStringToObject((new Date(2023, 10, 1)).toLocaleDateString('pt-BR')).getTime())).toBe(true);
  })

  it('usuário com livro para entregar hoje não está pendente', () => {
    expect(checkBooks(livrosEmprestados, formatDateStringToObject((new Date(2023, 10, 10)).toLocaleDateString('pt-BR')).getTime())).toBe(true);
  })

})