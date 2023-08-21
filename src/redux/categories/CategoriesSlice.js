import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  List: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.playload;
    },
  },
});

export default categoriesSlice.reducer;
export const { setStatus } = categoriesSlice.actions;
