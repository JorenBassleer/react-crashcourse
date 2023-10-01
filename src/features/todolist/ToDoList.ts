import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDoList } from '../../types/ToDoList';
import type { RootState } from '../../store';

interface ToDoListState {
  value: ToDoList[]
};

const initialState: ToDoListState = {
  value: [new ToDoList('')],
}

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addNewToDo: (state, action: PayloadAction<ToDoList>) => {
      state.value.push(action.payload);
    }
  }
})

export const { addNewToDo } = toDoListSlice.actions;
export const selectToDoList = (state: RootState) => state.toDoList.value;

export default toDoListSlice.reducer;
