import React from 'react';
import { FaBook, FaListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';
import styles from './Component.module.css';

const NavigationBar = () => (
  <header>
    <div className="header-container1">
      <div className="logo">BookStore</div>
      <nav>
        <ul>
          <li><Link to="/" className={styles.link}>Books</Link></li>
          <li><Link to="/Catogeries" className={styles.link}>Catogeries</Link></li>
        </ul>
      </nav>
    </div>
    <div className="header-container2">
      <FaBook />
      <FaListAlt />
    </div>
  </header>
);

export default NavigationBar;
