import { SET_MODEL, REMOVE_MODEL } from "../actions/types";
const modelReducer = (state = false, action) => {
  switch (action.type) {
    case SET_MODEL:
      return true;
    case REMOVE_MODEL:
      return false;
    default:
      return state;
  }
};
export default modelReducer;
