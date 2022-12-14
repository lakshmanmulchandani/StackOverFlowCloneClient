import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./PostsList";
import {fetchAllPosts} from "../../actions/posts";
import {Dispatch} from "redux";

const PostMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  var postsList = useSelector((state) => state.postsReducer);
  postsList = postsList.data;
  console.log("postsList");

  console.log(postsList);
  // console.log(questionsList);
  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/CreatePost");
    }
  };

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        <h1>All Posts</h1>
        <button onClick={checkAuth} className='ask-btn'>
          Create Post
        </button>
      </div>
      <div>
        {postsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{postsList.length} posts</p>
            <QuestionList postsList={postsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default PostMainbar;
