function ListGroup() {
  let items = ["New york", "Los Angeles", "Paris", "London"];
  items = [];

  return (
    <>
      <h1>List group</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
