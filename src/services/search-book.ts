import SearchParameters from "../interfaces/search-parameters"
import Livro from "../interfaces/livro"
import allBooks from "../frontend/storage/livros.json"

export const searchBook = ({searchInput, type, order}: SearchParameters) => {

    let booksFound: Livro[] = [];

    if(searchInput) {
        if(type == "livre") {
            allBooks.forEach((bookData => {
                for(const book in bookData) {
                    if(bookData[book as keyof typeof bookData].includes(searchInput)) {
                        booksFound.push(bookData);
                        break;
                    }
                }
            }));
        } else {
            allBooks.forEach((book => {
                if(book[type as keyof typeof book].includes(searchInput)) booksFound.push(book);
            }));
        }
    
        booksFound.sort((a, b) => (a[order as keyof typeof a] < b[order as keyof typeof a] ? -1 : 1));
    }

    return booksFound;
}