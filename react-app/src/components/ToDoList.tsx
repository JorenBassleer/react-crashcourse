import Task from "../types/Task";
import ToDoListItem from "./ToDoListItem";

interface Props {
  items: Task[];
}

function ToDoList({ items }: Props) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <ToDoListItem item={item} key={index} />
      ))}
    </ul>
  );
}

export default ToDoList;
