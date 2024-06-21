// view.js

class View {
  static displayMessage(message) {
      console.log(message);
  }

  static displayBooks(books) {
      if (books.length === 0) {
          console.log("No books in the library.");
      } else {
          console.log("Books in the library:");
          books.forEach((book, index) => {
              console.log(`${index + 1}. ${book.title} by ${book.author}`);
          });
      }
  }
}

module.exports = View;
