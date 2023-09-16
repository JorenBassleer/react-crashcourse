import Task from "../types/Task";
import ToDoListItem from "./ToDoListItem";

interface Props {
  items: Task[];
  isSelecting?: boolean;
  withEditOption?: boolean;
}

function ToDoList({ items, isSelecting = false, withEditOption = false }: Props) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <ToDoListItem item={item} key={index} isSelecting={isSelecting} withEditOption={withEditOption}/>
      ))}
    </ul>
  );
}

export default ToDoList;
