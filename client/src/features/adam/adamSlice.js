import { createSlice } from '@reduxjs/toolkit';

const adamSlice = createSlice({
  name: 'adam',
  initialState: {
    value: 'Adam',
  },
  reducers: {
    append: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { append } = adamSlice.actions;

export const selectAdam = (state) => state.adam.value;

export default adamSlice.reducer;
