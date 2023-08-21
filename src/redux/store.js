import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './book.Slice';
import categoriesReducer from './CategoriesSlice';

const store = configureStore({
    reducer: {
        books: bookReducer,
        categories: categoriesReducer,
    },
});

export default store;