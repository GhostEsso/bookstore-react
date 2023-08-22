import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/BooksSlice'; // Importez également la fonction removeBook
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.item_id}>
          <Book
            title={book.title}
            author={book.author}
            id={book.item_id}
            onRemoveBook={handleRemoveBook}
          />
        </div>
      ))}
      <AddBook onAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
