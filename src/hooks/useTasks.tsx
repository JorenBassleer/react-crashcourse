import { useState, useEffect } from "react";
import Task from "../types/Task";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = () => {
    // Fetch tasks from API
    setTasks([
      new Task("Task 1"),
      new Task("Task 2"),
      new Task("Task 3"),
      new Task("Task 4"),
      new Task("Task 5"),
    ]);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return { tasks, setTasks };
};
