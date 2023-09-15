import Task from '../types/Task';

interface Props {
  item: Task;
}
function ToDoListItem({ item }: Props) {
  return (
    <>
      <li className="list-group-item">{item.getName()}</li>
    </>
  )
}

export default ToDoListItem;