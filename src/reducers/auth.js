const authReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case "AUTH":
      // Recieved user profile from action as data, setting it up on local storage
      localStorage.setItem("Profile", JSON.stringify({...action?.data}));
      return {...state, data: action?.data};
    case "LOGOUT":
      // removing profile from the local stoage
      localStorage.clear();
      return {...state, data: null};
    default:
      return state;
  }
};

export default authReducer;
