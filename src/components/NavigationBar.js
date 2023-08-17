import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';
import styles from './Component.module.css';

const NavigationBar = () => (
  <div className="navigation-bar">
    <header>
      <div className="header-container1">
        <div className="logo">Bookstore ET</div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={styles.link}>
                BOOKS
              </Link>
            </li>
            <li>
              <Link to="/Catogeries" className={styles.link}>
                CATEGORIES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-container2">
        <FaUserCircle />
      </div>
    </header>
  </div>
);

export default NavigationBar;
