import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import MobileSideBar from "../../components/MobileSideBar/MobileSideBar";
import PostMainbar from "../../components/PostMainbar/PostMainbar";

const Community = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <MobileSideBar />
      <div className='home-container-2'>
        <PostMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Community;
