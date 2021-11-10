import React from "react";
import "./chatOnline.css";

function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/188244304/original/5e9bd425e8e7c125d5f408243d46754fc7e4874a/design-a-custom-profile-picture.png"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineUser"></span>
      </div>
    </div>
  );
}

export default ChatOnline;
