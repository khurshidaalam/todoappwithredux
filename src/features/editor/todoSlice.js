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
      state.push({
        id: action.payload.id,
        item: action.payload.item
      });
    },
    deleteData(state, action) {
      const delte = state.filter(({id})=> {
        // >id === action.payload.id
       
console.log(action.payload.id, id);

      });
console.log(delte)
    },
    
  }
})
export const { addData,deleteData } = todoSlice.actions;
export default todoSlice.reducer;