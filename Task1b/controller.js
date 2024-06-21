// controller.js

const { Book, Library } = require('./model');
const View = require('./view');
const readline = require('readline');

class Controller {
  constructor() {
    this.library = new Library();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.library.addBook(book);
    View.displayMessage(`Book added: "${title}" by ${author}`);
  }

  showBooks() {
    const books = this.library.getBooks();
    View.displayBooks(books);
  }

  promptAddBook() {
    this.rl.question('Enter book title: ', (title) => {
      this.rl.question('Enter book author: ', (author) => {
        this.addBook(title, author);
        this.showMenu();
      });
    });
  }

  showMenu() {
    console.log('\nMenu:');
    console.log('1. Add a book');
    console.log('2. Show all books');
    console.log('3. Exit');
    this.rl.question('Choose an option: ', (option) => {
      switch (option) {
        case '1':
          this.promptAddBook();
          break;
        case '2':
          this.showBooks();
          this.showMenu();
          break;
        case '3':
          this.rl.close();
          break;
        default:
          console.log('Invalid option. Please try again.');
          this.showMenu();
      }
    });
  }

  start() {
    this.showMenu();
  }
}

module.exports = Controller;
