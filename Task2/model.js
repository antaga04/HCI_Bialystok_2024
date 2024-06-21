// model.js

class Book {
  constructor(title, author) {
      this.title = title;
      this.author = author;
  }
}

class Library {
  constructor() {
      this.books = [];
  }

  addBook(book) {
      this.books.push(book);
  }

  getBooks() {
      return this.books;
  }
}

module.exports = { Book, Library };
