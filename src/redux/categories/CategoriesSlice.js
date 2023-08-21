import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
});

export default categorySlice.reducer;
