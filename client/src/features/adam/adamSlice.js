import { createSlice } from '@reduxjs/toolkit';

const adamSlice = createSlice({
  name: 'adam',
  initialState: {
    value: 'Adam',
  },
  reducers: {
    appendX: (state) => {
      state.value += 'X';
    },
  },
});

export const { appendX } = adamSlice.actions;

export const selectAdam = (state) => state.adam.value;

export default adamSlice.reducer;
