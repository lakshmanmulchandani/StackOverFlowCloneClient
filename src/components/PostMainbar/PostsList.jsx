import React from "react";
import Posts from "./Posts";
const PostsList = ({postsList}) => {
  return (
    <>
      {postsList.map((post) => (
        <Posts post={post} key={post._id} />
      ))}
    </>
  );
};

export default PostsList;
