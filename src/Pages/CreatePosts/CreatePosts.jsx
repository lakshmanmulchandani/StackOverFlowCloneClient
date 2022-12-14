import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import FileBase from "react-file-base64";
import "./AskQuestion.css";
import {createPost} from "../../actions/posts";

const CreatePosts = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ questionTitle, questionBody, questionTags})
    console.log(selectedFile);
    dispatch(
      createPost(
        {
          questionTitle,
          questionBody,
          questionTags,
          selectedFile,
          userPosted: User.result.name,
        },
        navigate
      )
    );
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Make a Community Post</h1>
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Live as its the last day,Post as its the best one</p>
              <input
                type='text'
                id='ask-ques-title'
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder='I am loving this site'
              />
            </label>

            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p>Tell us about it more</p>
              <textarea
                name=''
                id='ask-ques-body'
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols='30'
                rows='10'
                onKeyPress={handleEnter}></textarea>
            </label>
            <label htmlFor='ask-ques-body'>
              <h4>Upload image</h4>
              <p>Share your pic with us</p>
              <div>
                <FileBase
                  type='file'
                  multiple={false}
                  onDone={(base64) => setSelectedFile(base64.base64)}
                />
              </div>
            </label>

            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what you are feeling</p>
              <input
                type='text'
                id='ask-ques-tags'
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder='e.g. (xml typescript wordpress)'
              />
            </label>
          </div>
          <input
            type='submit'
            value='Reivew your post'
            className='review-btn'
          />
        </form>
      </div>
    </div>
  );
};

export default CreatePosts;
