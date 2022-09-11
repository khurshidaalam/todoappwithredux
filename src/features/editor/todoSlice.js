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
    // deleteData(state, action) {
    //   // [state.splice(0, action.payload),
    //   // ...state.splice(1)]

    //   state.splice({id: action.payload.id,id: action.payload.id})
    // //   (method) Array<WritableDraft<{ id: string; item: string; }>>.splice(start: number, deleteCount?: number | undefined): WritableDraft<{
    // //     id: string;
    // //     item: string;
    // // }>[] (+1 overload)
    // }
  }
})
export const { addData,deleteData } = todoSlice.actions;
export default todoSlice.reducer;