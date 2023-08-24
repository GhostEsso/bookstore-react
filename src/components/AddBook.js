import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/api';

const initialBook = {
  title: '',
  author: '',
  category: '',
};

export default function AddNewBook() {
  const [book, setBook] = useState(initialBook); // Utilisation d'un nom plus explicite
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...book, item_id: uuidv4() }; // Génération de l'identifiant unique
    dispatch(addBook(newBook));
    setBook(initialBook);
  };

  return (
    <section className="section_addbook">
      <h2>Add New Book</h2>
      <form>
        <input
          value={book.title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="input-field title-input"
        />

        <input
          value={book.author}
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          className="input-field author-input"
        />

        <input
          value={book.category}
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="input-field category-input"
        />

        <button className="add-button" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
}
