import Task from "../types/Task";

interface Props {
  item: Task;
  isSelecting?: boolean;
  withEditOption?: boolean;
}
function ToDoListItem({
  item,
  isSelecting = false,
  withEditOption = false,
}: Props) {
  return (
    <>
      <li
        className={
          "list-group-item w-100 p-4 " +
          (item.getIsDone() ? "list-group-item-success" : "")
        }
      >
        {isSelecting && withEditOption && !item.getIsDone() && (
          <input
            type="checkbox"
            className="mx-4"
            aria-label="Checkbox for following text input"
            onClick={() => {
              item.setIsDone(!item.getIsDone());
            }}
          ></input>
        )}
        {item.getName()}
      </li>
    </>
  );
}

export default ToDoListItem;
