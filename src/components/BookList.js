import React from 'react';
import AddBook from './AddBook';
import Book from './Book';
import './BookList.css';

const BookList = () => (
  <>
    <Book title="Book title" author="Book author" />
    <button type="button" id="delete-button">Remove</button>
    <AddBook />
  </>
);

export default BookList;
