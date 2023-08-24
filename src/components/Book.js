import React from 'react';
import PropTypes from 'prop-types';

export default function Book({
  title,
  author,
  category,
  removeBook,
  updateProgress,
}) {
  return (
    <div className="book_container">
      <div className="book_info">
        <p className="book_category">{category}</p>
        <h1 className="book_title">{title}</h1>
        <p className="book_author">{author}</p>
        <button className="comment-button" type="button">
          Comment |
        </button>
        <button className="remove-button" type="button" onClick={removeBook}>
          Remove
        </button>
        <button className="edit-button" type="button">
          | Edit
        </button>
      </div>
      <div className="book_center">
        <div className="progress-circle">
          <span>
            <p>
              <i className="fa-solid fa-circle-notch" />
              17%
            </p>
            <p>completed</p>
          </span>
        </div>
      </div>
      <div className="book_right">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-number">Chapter 17</p>
        <button className="update-progress-button" type="button" onClick={updateProgress}>
          UPDATE PROGRESS
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
  updateProgress: PropTypes.func.isRequired,
};
