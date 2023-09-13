import ListGroup from "./components//ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log('clicked button');
  };
  return (
    <div>
      <Alert>Hello world</Alert>
      <Button type="secondary" text="Click me" onClick={handleClick}/>
    </div>
  );
}

export default App;
