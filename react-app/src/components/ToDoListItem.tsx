interface Props {
  item: string;
}
function ToDoListItem({ item }: Props) {
  return (
    <>
      <li className="list-group-item">{item}</li>
    </>
  )
}

export default ToDoListItem;