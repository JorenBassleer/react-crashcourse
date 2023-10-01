import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDoList } from '@types/ToDoList';
import type { RootState } from '@store';

interface ToDoListState {
  list: ToDoList[]
};

const initialState: ToDoListState = {
  list: [],
}

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addNewToDo: (state, action: PayloadAction<ToDoList>) => {
      console.log('add new to do');
      state.list.push(action.payload);
    }
  }
})

export const { addNewToDo } = toDoListSlice.actions;
export const selectToDoList = (state: RootState) => state.toDoList.value;

export default toDoListSlice.reducer;
