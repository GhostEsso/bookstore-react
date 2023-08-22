import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import BookList from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
