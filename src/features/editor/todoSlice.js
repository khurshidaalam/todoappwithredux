import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', item: 'First Post!' },
  { id: '2', item: 'Second Post'}
];


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addData(state, action) {
      state.push(action.payload);
    }
  }
})
export const { addData } = todoSlice.actions;
export default todoSlice.reducer;