import React from 'react';

function AddBook() {
  return (
    <div className="form">
      <h2>Add New Book</h2>
      <form>
        <input type="text" name="title" placeholder="Title" className="input-field title-input-a" />
        <input type="text" name="author" placeholder="Author" className="input-field title-input-b" />
        <button type="submit" id="add-book">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
