import { SET_VISIBILITY_FILT } from "../actions/actions";

let initialState = "SHOW_ALL";

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILT:
      return action.payload.filter;
    default:
      return state;
  }
};
