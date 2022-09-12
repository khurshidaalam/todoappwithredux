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
      return  state.filter((item)=> {
             return item.id !== action.payload.id
       });
     },
     updateData(state, action){
      const objIndx = state.findIndex((item)=>{
        return item.id == 1;
      })
      return state[objIndx].item = action.payload.item;
     }
    
  }
})
export const { addData,deleteData,updateData } = todoSlice.actions;
export default todoSlice.reducer;