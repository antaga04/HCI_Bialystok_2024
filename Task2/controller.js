// controller.js

const { Book, Library } = require('./model');

class Controller {
    constructor() {
        this.library = new Library();
    }

    addBook(title, author) {
        const book = new Book(title, author);
        this.library.addBook(book);
        return book;
    }

    getBooks() {
        return this.library.getBooks();
    }
}

module.exports = Controller;
