import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import Globe from "../../assets/Globe.svg";
const Posts = ({post}) => {
  return (
    <div className='display-question-container'>
      <div className='postPic'>
        <img src={post.selectedFile || Globe} alt='Globe' />
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
            posted by {moment(post.askedOn).fromNow()} {post.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
