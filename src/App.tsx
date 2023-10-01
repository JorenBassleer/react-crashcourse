import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useTasks } from "./hooks/useTasks";
import ToDoListComponent from "./components/ToDoList";
import Input from "./components/Input";
import Button from "./components/Button";
import { Task } from "./types/Task";
import { ToDoList } from './types/ToDoList';
import { useAppSelector } from "./hooks";
import { useToDoList } from "./hooks/useToDoList";
import store from './store/store';
import { useDispatch } from "react-redux";


const App = () => {
  const { toDoList } = useToDoList();
  const dispatch = useDispatch();
  // toDoList.push(new ToDoList(''));
  const { tasks, setTasks } = useTasks();
  const [newItem, setNewItem] = useState(new Task(""));
  const [ newToDoList, setNewToDoList ] = useState(new ToDoList(""));
  const [isSelecting, setIsSelecting] = useState(false);
  const [viewAllList, setViewAllList] = useState(false);
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

  return (
    <main className="p-4">
      <section className="w-100 text-center text-primary">
        <h1>To Do App</h1>
      </section>
      <section className="border p-5 rounded w-50 mx-auto mt-4">
      <section>
        <h2>Create new to do list</h2>
        {/* <Input
          placeholder="Add new to do list"
          className="w-50 rounded"
          value={newToDoList.getName()}
          onChange={handleInputNewToDoList}
          onKeyDown={handleKeyDownNewToDoList}
        /> */}
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
