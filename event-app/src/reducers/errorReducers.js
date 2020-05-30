import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ERRORSADH,
  CLEAR_ERRORS_ADH,
} from "../actions/types";
const initialState = {
  errorSign: {},
  adhErrors: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errorSign: action.payload,
      };
    case GET_ERRORSADH:
      return {
        ...state,
        adhErrors: action.payload,
      };
    case CLEAR_ERRORS_ADH:
      return {
        ...state,
        adhErrors: [],
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorSign: {},
      };
    default:
      return state;
  }
}
