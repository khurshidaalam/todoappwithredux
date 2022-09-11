import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/editor/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
