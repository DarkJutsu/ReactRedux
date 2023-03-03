import { connect } from "react-redux";
import { toggleTask } from "../../store/actions/actions";
import { TaskList } from "../pure/TaskList";

const filterTask = (task, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return task;
    case "SHOW_ACTIVE":
      return task.filter((task) => !task.completed);
    case "SHOW_COMPLETED":
      return task.filter((task) => task.completed);
    default:
      return task;
  }
};

const mapStateToProps = (rootReducer) => {
  let state = rootReducer.rootReducer;
  return { tasks: filterTask(state.taskState, state.filterState) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: (id) => {
      dispatch(toggleTask(id));
    },
  };
};

export const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
