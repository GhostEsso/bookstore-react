import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <>
      <h3>{title}</h3>
      <h4>{author}</h4>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
