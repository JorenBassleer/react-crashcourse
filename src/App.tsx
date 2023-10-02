import { useState, ChangeEvent, KeyboardEvent, useRef } from "react";
import { useTasks } from "./hooks/useTasks";
import ToDoListComponent from "./components/ToDoList";
import Input from "./components/Input";
import Button from "./components/Button";
import { Task } from "./types/Task";
import { ToDoList } from './types/ToDoList';
import { useAppDispatch, useAppSelector } from "./store/store";
import { addNewToDo } from "./store/features/todolist/toDoListSlice";
import { useToDoList } from "./hooks/useToDoList";
import type { RootState } from '@store';




const App = () => {
  const dispatch = useAppDispatch();
  const [newName, setNewName] = useState<string>('');
  // const entireList = useAppSelector(state => state.toDoList);
  // console.log('entire lsit', entireList);
  // toDoList.push(new ToDoList(''));
  const { tasks, setTasks } = useTasks();
  const [newItem, setNewItem] = useState(new Task(""));
  // const [ newToDoList, setNewToDoList ] = useState(new ToDoList(""));
  const [isSelecting, setIsSelecting] = useState(false);
  const [viewAllList, setViewAllList] = useState(false);
  const toDoList = useAppSelector((state: RootState) => state.toDoList);
  console.log('todolist', toDoList.list);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewItem(new Task(value));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newItem.getName() !== "") {
      setTasks([...tasks, newItem]);
      setNewItem(new Task(""));
    }
  };
  const handleKeyDownNewToDoList = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newName !== "") {
      dispatch(addNewToDo({name: newName, tasks: []}));
    }
  };
  return (
    <main className="p-4">
      <section className="w-100 text-center text-primary">
        <h1>To Do App</h1>
      </section>
      <section className="border p-5 rounded w-50 mx-auto mt-4">
      <section>
        <h2>Create new to do list</h2>
        <Input
          placeholder="Add new to do list"
          className="w-50 rounded"
          value={newName}
          onChange={(e) => (setNewName(e.target.value))}
          onKeyDown={handleKeyDownNewToDoList}
        />
      </section>
        <div className="d-flex w-100">
          <Input
            placeholder="Add to to do"
            className="w-50 rounded"
            value={newItem.getName()}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            className=""
            onClick={() => setViewAllList(!viewAllList)}
          >
            {viewAllList ? "Hide all list" : "Show all"}
          </Button>
        </div>
        <h2>Only undone tasks</h2>
        <ToDoListComponent
          items={tasks.filter((item) => !item.getIsDone())}
          isSelecting={isSelecting}
          withEditOption={true}
        />
        {viewAllList && (
          <div>
            <h2 className="mb-4 mt-5">Complete list</h2>
            <ToDoListComponent items={tasks} isSelecting={isSelecting} />
          </div>
        )}

        <Button
          type="warning"
          onClick={() => {
            setIsSelecting(!isSelecting);
          }}
        >
          {isSelecting ? "Save" : "Edit"}
        </Button>
      </section>
    </main>
  );
};

export default App;
