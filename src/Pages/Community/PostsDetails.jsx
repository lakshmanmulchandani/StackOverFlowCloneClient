import React, {useState} from "react";
import {useParams, Link, useNavigate, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";

import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import "./Posts.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import {postAnswer, deleteQuestion, voteQuestion} from "../../actions/question";
import {deletePost, votePost} from "../../actions/posts";
import Globe from "../../assets/Globe.svg";

const PostsDetails = () => {
  const {id} = useParams();

  var postsList = useSelector((state) => state.postsReducer);
  postsList = postsList.data;
  console.log(postsList);
  const [Answer, setAnswer] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
          })
        );
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    console.log(id);
    dispatch(deletePost(id, Navigate));
  };

  const handleUpVote = () => {
    dispatch(votePost(id, "upVote"));
  };

  const handleDownVote = () => {
    dispatch(votePost(id, "downVote"));
  };

  return (
    <div className='question-details-page'>
      {/* console.log(questionsList) */}
      {postsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {postsList
            .filter((post) => post._id === id)
            .map((post) => (
              <div key={post._id}>
                <section className='question-details-container'>
                  <h1>{post.questionTitle}</h1>
                  <div className='postPic'>
                    <img src={post.selectedFile || Globe} alt='Globe' />
                  </div>

                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <img
                        src={upvote}
                        alt=''
                        width='18'
                        className='votes-icon'
                        onClick={handleUpVote}
                      />
                      <p>{post.upVote.length - post.downVote.length}</p>
                      <img
                        src={downvote}
                        alt=''
                        width='18'
                        className='votes-icon'
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{width: "100%"}}>
                      <p className='question-body'>{post.questionBody}</p>
                      <div className='question-details-tags'>
                        {post.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className='question-actions-user'>
                        <div>
                          <button type='button' onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === post?.userId && (
                            <button type='button' onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(post.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${post.userId}`}
                            className='user-link'
                            style={{color: "#0086d8"}}>
                            <Avatar
                              backgroundColor='orange'
                              px='8px'
                              py='5px'
                              borderRadius='4px'>
                              {post.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{post.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* {post.noOfAnswers !== 0 && (
                  <section>
                    <h3>{post.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={post._id}
                      question={post}
                      handleShare={handleShare}
                    />
                  </section>
                )} */}
                {/* <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, post.answer.length);
                    }}>
                    <textarea
                      name=''
                      id=''
                      cols='30'
                      rows='10'
                      onChange={(e) => setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type='Submit'
                      className='post-ans-btn'
                      value='Post Your Answer'
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {post.questionTags.map((tag) => (
                      <Link to='/Tags' key={tag} className='ans-tags'>
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to='/AskQuestion'
                      style={{textDecoration: "none", color: "#009dff"}}>
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section> */}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PostsDetails;
