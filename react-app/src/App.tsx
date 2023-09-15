import { useState, ChangeEvent, KeyboardEvent } from "react";
import ToDoList from "./components/ToDoList";
import Input from './components/Input';
import Task from "./types/Task";

const App = () => {
  const [items, setItems] = useState<Task[]>([
      new Task('Task 1'),
      new Task('Task 2'),
      new Task('Task 3'),
      new Task('Task 4'),
      new Task('Task 5'),
    ]);

  const [newItem, setNewItem ] = useState(new Task(''));
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewItem(new Task(value));
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setItems([...items, newItem]);
      setNewItem(new Task(''));
    }
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Add to to do"
        className="w-100"
        value={newItem.getName()}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <ToDoList items={items} />
    </div>
  );
}

export default App;
