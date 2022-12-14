import React from "react";
import {useSelector} from "react-redux";

import User from "./User";
import "./Users.css";
const FollowersList = () => {
  const currentUser = useSelector((state) => state.currentUserReducer);

  const users = currentUser.result.followers;
  console.log(users);
  return (
    <div className='user-list-container'>
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default FollowersList;
