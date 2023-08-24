import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, getBooks } from '../redux/api';
import Book from './Book';

export default function BooksList() {
  const { isLoading, isError, value } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const loading = isLoading && <p>Books loading, please wait!</p>;
  const error = isError && <p>Error loading books, please try again!</p>;

  return (
    <>
      {loading}
      {error}
      <ul style={{ listStyle: 'none' }}>
        {value.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              removeBook={() => dispatch(deleteBook(book.item_id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
