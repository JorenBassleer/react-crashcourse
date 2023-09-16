import { useState, ChangeEvent, KeyboardEvent } from "react";
import ToDoList from "./components/ToDoList";
import Input from './components/Input';
import Button from "./components/Button";
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
  const [isSelecting, setIsSelecting ] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewItem(new Task(value));
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newItem.getName() !== '') {
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
      <ToDoList items={items} isSelecting={isSelecting} />
      <Button onClick={() => { setIsSelecting(!isSelecting)}}>Edit</Button>
    </div>
  );
}

export default App;
