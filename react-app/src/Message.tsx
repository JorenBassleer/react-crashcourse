function Message() {
  const name = 'Bassie';
  if (name)
    return <h1 className="bg-gray-800">Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;