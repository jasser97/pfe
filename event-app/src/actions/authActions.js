import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { removeModel } from "./modelAction";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  SUCCESS_REGISTER,
  CLEAR_ERRORS,
  ACTIVE_CLASS,
  GET_ERROR,
  GET_ERRORSADH,
  GET_Adherent,
  CLEAR_ERRORS_ADH,
} from "./types";
// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/sign-in")) // re-direct to login on successful register

    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(getAdhrent());
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Set logged in user
export const setCurrentUser = (decoded) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
  dispatch(getAdhrent());
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  dispatch(getAdhrent({}));
};
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
export const clearErrorsAdh = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_ADH,
  });
};
export const activeClass = (active) => (dispatch) => {
  dispatch({
    type: ACTIVE_CLASS,
    payload: active,
  });
};

export const getAdhrent = (user) => (dispatch) => {
  axios
    .get("/api/adherent")
    .then((res) =>
      dispatch({
        type: GET_Adherent,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_ERROR,
      });
    });
};

export const registerAdherent = (data, history) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  axios
    .post("/api/adherent", data, config)
    .then((res) => {
      dispatch({
        type: SUCCESS_REGISTER,
        payload: res.data,
      });
      dispatch(removeModel());
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORSADH,
        payload: err.response.data,
      })
    );
};
