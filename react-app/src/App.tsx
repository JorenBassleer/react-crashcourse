import ListGroup from "./components//ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Hello world</Alert>}
      <Button onClick={() => setShowAlert(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
