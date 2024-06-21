// renderer.js

const Controller = require('./controller');
const controller = new Controller();

document.getElementById('addBookButton').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        controller.addBook(title, author);
        displayBooks();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
    }
});

function displayBooks() {
    const books = controller.getBooks();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

// Initial display of books
displayBooks();
