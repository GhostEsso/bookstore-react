import React from 'react';
import PropTypes from 'prop-types';

export default function Book({
  title, author, id, onRemoveBook,
}) {
  return (
    <div className="book">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <div className="button-group">
        <button className="comment-button" type="button">
          Comment |
        </button>
        <button
          className="remove-button"
          type="button"
          onClick={() => onRemoveBook(id)}
        >
          Remove
        </button>
        <button className="edit-button" type="button">
          | Edit
        </button>
      </div>
      <hr />
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};
