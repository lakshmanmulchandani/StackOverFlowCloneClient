const postsReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return {...state};
    case "FETCH_ALL_POSTS":
      return {...state, data: action.payload};
    default:
      return state;
  }
};
export default postsReducer;
