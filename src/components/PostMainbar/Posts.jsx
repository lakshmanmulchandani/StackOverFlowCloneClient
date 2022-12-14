import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const Posts = ({post}) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
        <p>{post.upVote.length - post.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className='display-votes-ans'>
        <p>{post.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className='display-question-details'>
        <Link to={`/Community/${post._id}`} className='question-title-link'>
          {post.questionTitle}
        </Link>
        <div className='display-tags-time'>
          <div className='display-tags'>
            {post.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className='display-time'>
            asked {moment(post.askedOn).fromNow()} {post.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
