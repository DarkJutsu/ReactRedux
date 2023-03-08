import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TaskContainer } from "./components/containers/TaskContainer";
import { TaskFormContainer } from "./components/containers/TaskFormContainer";
import { FilterOptions } from "./components/pure/FilterOptions";
import { LoginFormContainer } from "./components/containers/LoginFormContainer";

function AppReduxSaga() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginFormContainer />
    </div>
  );
}

export default AppReduxSaga;
