import React from "react";
import "./message.css";

function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/188244304/original/5e9bd425e8e7c125d5f408243d46754fc7e4874a/design-a-custom-profile-picture.png"
          alt=""
        />
        <p className="messageText">This is the message</p>
      </div>
      <div className="messageBottom">1h ago</div>
    </div>
  );
}

export default Message;
