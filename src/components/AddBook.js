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
    <section>
      <h2>Add New Book</h2>
      <form>
        <input
          value={book.title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />

        <input
          value={book.author}
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />

        <input
          value={book.category}
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <button className="add-button" type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </section>
  );
}
