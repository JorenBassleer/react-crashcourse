import { useState, ChangeEvent, KeyboardEvent } from "react";
import ToDoList from "./components/ToDoList";
import Input from "./components/Input";
import Button from "./components/Button";
import Task from "./types/Task";

const App = () => {
  const [items, setItems] = useState<Task[]>([
    new Task("Task 1"),
    new Task("Task 2"),
    new Task("Task 3"),
    new Task("Task 4"),
    new Task("Task 5"),
  ]);

  const [newItem, setNewItem] = useState(new Task(""));
  const [isSelecting, setIsSelecting] = useState(false);
  const [viewAllList, setViewAllList] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewItem(new Task(value));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newItem.getName() !== "") {
      setItems([...items, newItem]);
      setNewItem(new Task(""));
    }
  };

  return (
    <main className="p-4">
      <section className="w-100 text-center text-primary">
        <h1>To Do App</h1>
      </section>
      <section className="border p-5 rounded w-50 mx-auto mt-4">
        <Input
          type="text"
          placeholder="Add to to do"
          className="w-50 position-relative"
          value={newItem.getName()}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="position-absolute w-50">
          <Button
            onClick={() => {
              setViewAllList(!viewAllList);
            }}
          >
            {viewAllList ? "Hide all list" : "Show all"}
          </Button>
        </div>
        <h2>Only undone tasks</h2>
        <ToDoList
          items={items.filter((item) => !item.getIsDone())}
          isSelecting={isSelecting}
          withEditOption={true}
        />
        {viewAllList && (
          <div>
            <h2 className="mb-4 mt-5">Complete list</h2>
            <ToDoList items={items} isSelecting={isSelecting} />
          </div>
        )}

        <Button
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
