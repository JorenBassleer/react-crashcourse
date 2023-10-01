import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { ToDoList } from "../types/ToDoList";

export const useToDoList = () => {
  // const [toDoList, setToDoList ] = useState<ToDoList>();
  const toDoList = useAppSelector((state) => state.toDoList.value);
  // const fetchToDoList = () => {
  //   setToDoList(new ToDoList('List number 1'));
  // };
  // useEffect(() => {
  //   fetchToDoList();
  // }, []);
  const dispatch = useAppDispatch();

  return { toDoList, dispatch}
}