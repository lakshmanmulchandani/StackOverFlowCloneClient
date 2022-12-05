import * as api from "../api";
import {setCurrentUser} from "./currentUser";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    // Calling api and sendind authdata to make new user, profile with jwt is recieved in response
    const {data} = await api.signUp(authData);
    // calling reducer with profile containing token to set it up in local storage
    dispatch({type: "AUTH", data});
    // Getting profile from the local storage and setting it as current user also navigating to home page
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    // Calling api and sendind authdata to make new user, profile with jwt is recieved in response
    const {data} = await api.logIn(authData);
    // calling reducer with profile containing token to set it up in local storage
    dispatch({type: "AUTH", data});
    // Getting profile from the local storage and setting it as current user also navigating to home page
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
