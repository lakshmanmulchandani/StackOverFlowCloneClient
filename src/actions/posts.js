import * as api from "../api/index";

export const createPost = (postData, navigate) => async (dispatch) => {
  try {
    const data = await api.createPost(postData);
    // console.log(postData);
    dispatch({type: "CREATE_POST", payload: data});
    dispatch(fetchAllPosts());
    navigate("/Community");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const {data} = await api.getAllPosts();

    dispatch({type: "FETCH_ALL_POSTS", payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id, navigate) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(fetchAllPosts());
    navigate("/Community");
  } catch (error) {
    console.log(error);
  }
};

export const votePost = (id, value) => async (dispatch) => {
  try {
    await api.votePost(id, value);
    dispatch(fetchAllPosts());
  } catch (error) {
    console.log(error);
  }
};

// export const postAnswer = (answerData) => async (dispatch) => {
//     try {
//         const { id, noOfAnswers, answerBody, userAnswered } = answerData;
//         const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered )
//         dispatch({ type: 'POST_ANSWER', payload: data})
//         dispatch(fetchAllQuestions())
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
//     try {
//         await api.deleteAnswer(id, answerId, noOfAnswers)
//         dispatch(fetchAllQuestions())
//     } catch (error) {
//         console.log(error)
//     }
// }
