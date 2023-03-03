import { ADD_TASK, TOGGLE_TASK } from "../actions/actions";

let initialState = [];
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map((task, i) => {
        if (task.id === action.payload.id) {
          return Object.assign({}, task, {
            completed: !task.completed
          })
        }
        return task
      });
    default:
      return state;
  }
};
