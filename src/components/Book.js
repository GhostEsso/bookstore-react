import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title,
  author,
  id,
  onRemoveBook,
}) => (
  <div className="book">
    <h3>{title}</h3>
    <h4>{author}</h4>
    <div className="button-group">
      <button className="comment-button" type="button">Comment |</button>
      <button
        className="remove-button"
        type="button"
        onClick={() => onRemoveBook(id)}
      >
        Remove
      </button>
      <button className="edit-button" type="button">| Edit</button>
    </div>
    <hr />
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number,
  onRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  title: '',
  author: '',
  id: null,
  onRemoveBook: () => {},
};

export default Book;
