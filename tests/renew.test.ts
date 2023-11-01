import { formatDateStringToObject, checkBooks, removeSelectedBook } from "../src/services/renew-book";
import {expect, describe, it} from '@jest/globals';
import livrosEmprestados from "./data/livros-emprestados.json";
import Livro from "../src/interfaces/livro";

describe('teste da função formatar data para objeto Date', () => {
    it('dia válido deveria ser formatado', () => {
      expect(formatDateStringToObject("01/11/2023")).toBeInstanceOf(Date);
    })

    it('dia com formatação errada não deveria retornar', () => {
      const date = formatDateStringToObject("01-11-2023");
      expect(date.getDate()).toBeNaN();
    })
})