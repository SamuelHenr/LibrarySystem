import { addDays, bookIsAlreadyLent, formatBook } from "../src/services/lend-book";
import {expect, describe, it} from '@jest/globals';
import livrosEmprestados from "./data/livros-emprestados.json";
import Livro from "../src/interfaces/livro";

describe('teste da função de adicionar dias', () => {
    it('teste para acrescentar dias', () => {
      expect(addDays(new Date(2023, 10, 1), 5)).toBe("06/11/2023");
    })

    it('teste para decrementar dias', () => {
      expect(addDays(new Date(2023, 10, 10), -5)).toBe("05/11/2023");
    })

    it('teste para não acrescentar dias', () => {
      expect(addDays(new Date(2023, 10, 10), 0)).toBe("10/11/2023");
    })

    it('teste para virar o mes', () => {
      expect(addDays(new Date(2023, 10, 30), 5)).toBe("05/12/2023");
    })

    it('teste para virar o ano', () => {
      expect(addDays(new Date(2023, 11, 30), 2)).toBe("01/01/2024");
    })
})

describe('teste da função de livro já está em empréstimo para usuário', () => {
  it('livro em uso não pode ser emprestado', () => {
    expect(bookIsAlreadyLent(livrosEmprestados, "1")).toBe(true);
  })

  it('livro que não está em uso pode ser emprestado', () => {
    expect(bookIsAlreadyLent(livrosEmprestados, "4")).toBe(false);
  })

  it('usuário com nenhum livro pode pegar qualquer um', () => {
    expect(bookIsAlreadyLent([], "")).toBe(false);
  })
})

describe('teste da função formatar livro para livro emprestado', () => {
  it('livro inexistente não deveria ser formatado', () => {
    expect(formatBook(null)).toBeUndefined();
  })

  it('livro sem reservas não deveria ser formatado', () => {

    const livro : Livro = {
      id: "1",
      titulo: "titulo",
      autor: "autor",
      assunto: "assunto",
      publicacao: "01/11/2023",
      reserva: "0"
    }

    expect(formatBook(livro)).toBeUndefined();
  })

  it('livro existente deveria ser formatado', () => {

    const livro : Livro = {
      id: "1",
      titulo: "titulo",
      autor: "autor",
      assunto: "assunto",
      publicacao: "01/11/2023",
      reserva: "1"
    }

    const livroFormatado = formatBook(livro);

    if(livroFormatado) {
      expect(typeof livroFormatado.idLivro).toEqual("string");
      expect(typeof livroFormatado.titulo).toEqual("string");
      expect(typeof livroFormatado.entrega).toEqual("string");
      expect(typeof livroFormatado.limite).toEqual("number");
    }
  })

  it('livro formatado deveria ter mesmo id que livro emprestado', () => {

    const livro : Livro = {
      id: "1",
      titulo: "titulo",
      autor: "autor",
      assunto: "assunto",
      publicacao: "01/11/2023",
      reserva: "1"
    }

    const livroFormatado = formatBook(livro);

    if(livroFormatado) {
      expect(livroFormatado.idLivro).toBe(livro.id);
    }
  })

  it('livro formatado deveria ter mesmo titulo que livro emprestado', () => {

    const livro : Livro = {
      id: "1",
      titulo: "titulo",
      autor: "autor",
      assunto: "assunto",
      publicacao: "01/11/2023",
      reserva: "1"
    }

    const livroFormatado = formatBook(livro);

    if(livroFormatado) {
      expect(livroFormatado.titulo).toBe(livro.titulo);
    }
  })

  it('livro formatado deveria ter limite de reservas igual a 5', () => {

    const livro : Livro = {
      id: "1",
      titulo: "titulo",
      autor: "autor",
      assunto: "assunto",
      publicacao: "01/11/2023",
      reserva: "1"
    }

    const livroFormatado = formatBook(livro);

    if(livroFormatado) {
      expect(livroFormatado.limite).toBe(5);
    }
  })

  it('livro formatado deveria ter data de devolução a 15 dias de hoje', () => {

    const livro : Livro = {
      id: "1",
      titulo: "titulo",
      autor: "autor",
      assunto: "assunto",
      publicacao: "01/11/2023",
      reserva: "1"
    }

    const livroFormatado = formatBook(livro);

    if(livroFormatado) {
      expect(livroFormatado.entrega).toBe(addDays(new Date(), 15));
    }
  })

})