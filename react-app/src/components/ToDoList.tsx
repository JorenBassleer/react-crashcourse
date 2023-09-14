import ToDoListItem from "./ToDoListItem";

interface Props {
  items: string[];
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
