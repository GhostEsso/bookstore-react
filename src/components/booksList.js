import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, getBooks } from '../redux/api';
import Book from './Book';

const BooksList = () => {
  const { isLoading, isError, value } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Books loading, please wait!</p>;
  }

  if (isError) {
    return <p>Error loading books, please try again!</p>;
  }

  return (
    <ul className="books-list">
      {value.map((book) => (
        <li key={book.item_id}>
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
            onRemove={() => dispatch(deleteBook(book.item_id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
