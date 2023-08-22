import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/BooksSlice';
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.item_id}>
          <Book title={book.title} author={book.author} />
        </div>
      ))}
      <AddBook onAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
