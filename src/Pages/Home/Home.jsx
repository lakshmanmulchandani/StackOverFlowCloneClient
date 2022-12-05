import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import MobileSideBar from "../../components/MobileSideBar/MobileSideBar";

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <MobileSideBar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
