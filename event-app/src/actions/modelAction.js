import { SET_MODEL, REMOVE_MODEL } from "./types";

export const setModel = () => (dispatch) => {
  dispatch({
    type: SET_MODEL,
  });
};
export const removeModel = () => (dispatch) => {
  dispatch({
    type: REMOVE_MODEL,
  });
};
