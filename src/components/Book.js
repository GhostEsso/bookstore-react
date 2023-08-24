import PropTypes from 'prop-types';

export default function Book({
  title,
  author,
  category,
  removeBook,
}) {
  return (
    <div className="book_container">
      <div className="book_info">
        <h2 className="book_title">{title}</h2>
        <p className="book_author">{author}</p>
        <p className="book_category">{category}</p>
        <button className="remove-button" type="button" onClick={removeBook}>
          Remove
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
