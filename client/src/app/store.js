import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import adamReducer from '../features/adam/adamSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    adam: adamReducer,
  },
});
