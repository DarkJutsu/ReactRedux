import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

const initialState = {
  fetching: false,
  token: null,
  err: null,
  loged: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
        token: null,
        err: null,
        loged: false,
      };
    case API_CALL_SUCCESS:
      return {
        ...state,
        fetching: true,
        token: action.payload.token,
        err: null,
        loged: true,
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        token: null,
        err: action.payload.err,
        loged: false,
      };
    default:
      return state;
  }
};
