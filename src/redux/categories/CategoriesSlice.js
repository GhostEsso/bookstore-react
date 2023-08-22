import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

export const CheckStatusFunc = (status) => {
  if (status === 'Under construction') {
    return 'Inactive';
  }
  return 'Active';
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = CheckStatusFunc(action.payload);
    },
  },
});

export default categoriesSlice.reducer;
