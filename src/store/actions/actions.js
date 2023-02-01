let nextId = 0;

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SET_VISIBILITY_FILT = "SET_VISIBILITY_FILT";

/**
 *
 * @param {string} text
 * @returns action ADD TASK
 */
export const addTask = (text) => {
  return {
    type: ADD_TASK,
    payload: {
      id: nextId++,
      text,
    },
  };
};

/**
 *
 * @param {number} id
 * @returns action TOGGLE TASK
 */
export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
};

/**
 *
 * @param {string} filter
 * @returns action SET VISIBILITY FILTER
 */
export const setVisibilityFilt = (filter) => {
  return {
    type: SET_VISIBILITY_FILT,
    payload: {
      filter,
    },
  };
};
