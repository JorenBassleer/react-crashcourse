import ListGroup from "./components//ListGroup";
import { useState, ChangeEvent } from "react";
import ToDoList from "./components/ToDoList";
import Input from './components/Input';

const App = () => {
  const items = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
  const [newItem, setNewItem ] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewItem(value);
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Add to to do"
        className="w-100"
        value={newItem}
        onChange={handleInputChange}
      />
      <ToDoList items={items} />
    </div>
  );
}

export default App;
