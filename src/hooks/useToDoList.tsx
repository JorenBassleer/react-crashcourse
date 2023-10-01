import { useState, useEffect } from "react";
import { ToDoList } from "../types/ToDoList";

export const useToDoList = () => {
  const [toDoList, setToDoList ] = useState<ToDoList>();

  const fetchToDoList = () => {
    setToDoList(new ToDoList('List number 1'));
  };
  useEffect(() => {
    fetchToDoList();
  }, []);

  return { toDoList, setToDoList}
}