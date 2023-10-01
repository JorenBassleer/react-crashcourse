import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDoList } from '@types/ToDoList';
import type { RootState } from '@store';

interface ToDoListState {
  list: ToDoList[]
  test: string
};

const initialState: ToDoListState = {
  list: [],
  test: '',
}

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addNewToDo: (state, action: PayloadAction<ToDoList>) => {
      state.test = '123';
      console.log('here', action.payload);
      state.list = [...state.list, action.payload];
      console.log('state:=', state.list)
    }
  }
})

export const { addNewToDo } = toDoListSlice.actions;
export const selectToDoList = (state: RootState) => state.toDoList;

export default toDoListSlice.reducer;
