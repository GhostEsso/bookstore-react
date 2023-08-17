import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import BookList from './components/BookList';
import Categories from './components/Categories';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
      <AddBook />
    </div>
  );
}

export default App;
