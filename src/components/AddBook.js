import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/BooksSlice';

export default function AddNewBook() {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...values,
    };
    dispatch(addBook(newBook));
    setValues({});
  }

  return (
    <div className="form">
      <h2>Add New Book</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input-field title-input-a"
          value={values.title || ''}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          className="input-field title-input-b"
          value={values.author || ''}
          onChange={handleChange}
        />

        <button type="submit" id="add-book" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
