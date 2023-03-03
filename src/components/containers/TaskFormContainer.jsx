import { connect } from "react-redux";
import { addTask } from "../../store/actions/actions";
import { TaskForm } from "../pure/TaskForm";

const mapStateToProps = (rootReducer) => {
  //Not necessary
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddTask: (text) => {
      dispatch(addTask(text));
    },
  };
};

export const TaskFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);