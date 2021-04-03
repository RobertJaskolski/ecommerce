import React from "react";
import "./styles.scss";
import userIMG from "../../assets/user.png";

function UserProfile(props) {
  const { currentUser } = props;

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} alt="User avatar" />
          </div>
        </li>
        <li>
          <span className="displayName">
            {currentUser?.displayName && currentUser.displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;
