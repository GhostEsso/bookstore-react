import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    book: [],
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.book.push(action.payload);
        },
        removeBook: (state, action) => {
            state.book = state.book.filter(book => book.id !== action.playload);
        },
    },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;