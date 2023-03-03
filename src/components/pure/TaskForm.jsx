import PropsTypes from "prop-types";
import { useRef } from "react";

export const TaskForm = ({ AddTask }) => {
  const newtxt = useRef();

  const style={
    'height': '30px',
    'marginRight': '1em',
    'fontSize': '20px',
  }

  return (
    <div>
      <h1>Create your Task</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddTask(newtxt.current.value);
          newtxt.current.value = "";
        }}
      >
        <input type="text" ref={newtxt} style={style} />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  AddTask: PropsTypes.func.isRequired,
};
