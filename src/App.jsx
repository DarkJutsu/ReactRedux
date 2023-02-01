import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TaskContainer } from "./components/containers/TaskContainer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TaskContainer />
    </div>
  );
}

export default App;
