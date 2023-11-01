import { addDays, bookIsAlreadyLent, lendBook } from "../src/services/lend-book";
import {expect, describe, it} from '@jest/globals';
import livrosEmprestados from "./data/livros-emprestados.json";

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