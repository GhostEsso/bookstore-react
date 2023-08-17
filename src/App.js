import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
