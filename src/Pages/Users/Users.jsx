import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import MobileSideBar from "../../components/MobileSideBar/MobileSideBar";
import UsersList from "./UsersList";
const Users = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <MobileSideBar />
      <div className='home-container-2' style={{marginTop: "30px"}}>
        <h1 style={{fontWeight: "400"}}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
