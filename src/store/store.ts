import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import toDoListReducer from '@store/features/todolist/toDoListSlice';

const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType <typeof store.getState>> = useSelector;

export default store;