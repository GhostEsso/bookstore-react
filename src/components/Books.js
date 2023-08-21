import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  return (
    <>
      <Book title="Book title" author="Book author" />
      <button className="remove-button" type="button">Remove</button>
      <AddBook />
    </>
  );
}

export default Books;
