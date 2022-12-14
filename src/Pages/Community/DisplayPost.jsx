import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import PostsDetails from "./PostsDetails";

const DisplayPost = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <PostsDetails />
        {/* <RightSidebar /> */}
      </div>
    </div>
  );
};

export default DisplayPost;
