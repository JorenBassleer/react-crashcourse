import Task from "../types/Task";

interface Props {
  item: Task;
  isSelecting: boolean;
}
function ToDoListItem({ item, isSelecting }: Props) {
  
  return (
    <>
      <li
        className={
          "list-group-item w-100 p-4 " +
          (item.getIsDone() ? "list-group-item-success" : "")
        }
      >
        {
          isSelecting && !item.getIsDone() && <input
          type="checkbox"
          className="mx-4"
          aria-label="Checkbox for following text input"
        ></input>        
        }
        {item.getName()}
      </li>
    </>
  );
}

export default ToDoListItem;
