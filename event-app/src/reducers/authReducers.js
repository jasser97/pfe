import {
  SET_CURRENT_USER,
  SUCCESS_REGISTER,
  GET_Adherent,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  adherent: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: { ...action.payload.user },
      };

    case GET_Adherent:
      return {
        ...state,
        adherent: action.payload,
      };
    // case USER_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    case SUCCESS_REGISTER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
