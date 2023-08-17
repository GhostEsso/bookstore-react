import React from 'react';
import './AddBook.css';

const AddBook = () => (
  <div className="form">
    <h2>Add New Book</h2>
    <form>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit" id="add-book">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
