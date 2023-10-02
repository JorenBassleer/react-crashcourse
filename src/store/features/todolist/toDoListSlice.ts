import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDoList } from '@types/ToDoList';
import { Task } from '@types/Task';
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
    addNewToDo: (state, action: PayloadAction<{name: string, tasks: Task[]}>) => {
      state.list.push({
        name: action.payload.name,
        tasks: action.payload.tasks,
      });
      console.log('list:', state.list.values)
    }
  }
})

export const { addNewToDo } = toDoListSlice.actions;
export const selectToDoList = (state: RootState) => state.toDoList;

export default toDoListSlice.reducer;
