import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Nav() {
  return (
    <div className="nav_container">
      <ul className="nav_links">
        <h1 className="nav">Bookstore TEP</h1>
        <Link to="/">
          <li>BOOKS</li>
        </Link>
        <Link to="Categories">
          <li className="category_item">CATEGORIES</li>
        </Link>
      </ul>
      <div className="user_icon">
        <FaUserCircle />
      </div>
    </div>
  );
}

export default Nav;
