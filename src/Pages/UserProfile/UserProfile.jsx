import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faPen,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";
import * as api from "./../../api/";
import {Follow} from "../../actions/users";

const UserProfile = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const [Followed, setFollowed] = useState(
    currentUser.result.followings.includes(id)
  );
  console.log(Followed);
  console.log(id);
  console.log(currentUser.result);
  const dispatch = useDispatch();
  // console.log(currentUser.result.followings.includes("0"));
  const Luserid = currentUser.result._id;
  const handleClick = async () => {
    try {
      if (Followed) {
        // console.log(id);
        await api.unfollow(id, {Luserid});

        dispatch({type: "unfollow", payload: Luserid});
      } else {
        // console.log(id);
        await api.follow(id, Luserid);
        dispatch({type: "follow", payload: Luserid});
      }
      setFollowed(!Followed);
    } catch (err) {}
  };
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <section>
          <div className='user-details-container'>
            <div className='user-details'>
              <Avatar
                backgroundColor='purple'
                color='white'
                fontSize='50px'
                px='40px'
                py='30px'>
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className='user-name'>
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type='button'
                onClick={() => setSwitch(true)}
                className='edit-profile-btn'>
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
            {currentUser?.result._id !== id && !Followed && (
              <button
                onClick={() => handleClick()}
                type='button'
                className='edit-profile-btn'>
                <FontAwesomeIcon icon={faUserFriends} /> Follow Profile
              </button>
            )}
            {currentUser?.result._id !== id && Followed && (
              <button
                onClick={() => handleClick()}
                type='button'
                className='edit-profile-btn'>
                <FontAwesomeIcon icon={faUserFriends} /> Unfollow Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
