import PropsTypes from "prop-types";
import { Task } from "./Task";

export const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <div>
      <h1>Your Task</h1>
      <ul>
        {tasks.map((task, i) => (
          <Task
            key={i}
            onClick={() => onTaskClick(task?.id)}
            completed={task?.completed}
            text={task?.text}
            id={task?.id}
          />
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number.isRequired,
      text: PropsTypes.string.isRequired,
      completed: PropsTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTaskClick: PropsTypes.func.isRequired,
};
