import Task from '../types/Task';

interface Props {
  item: Task;
}
function ToDoListItem({ item }: Props) {
  return (
    <>
      <li className={'list-group-item ' + (item.getIsDone() === true ? 'list-group-item-success' : '')}>{item.getName()}</li>
    </>
  )
}

export default ToDoListItem;