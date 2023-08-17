import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddBook.css'; // Import the CSS file

function AddBook({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, category };
    onAddBook(newBook);
    setTitle('');
    setCategory('');
  };

  return (
    <div className="add-book-container">
      <h2 className="AddNewBook">ADD NEW BOOK</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="add-book-inputs">
          <input
            type="text"
            id="title"
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="category"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button className="add-book-button" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

AddBook.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default AddBook;
