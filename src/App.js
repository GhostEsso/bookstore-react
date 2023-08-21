import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store
import NavigationBar from './components/NavigationBar';
import BookList from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      {/* Wrap your app with Provider */}
      <div className="main">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
