import React from "react";
import "./conversation.css";

function Conversation() {
  return (
    <div className="conversation">
      <img
        className="conversationImage"
        src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/188244304/original/5e9bd425e8e7c125d5f408243d46754fc7e4874a/design-a-custom-profile-picture.png"
        alt=""
      />
      <span className="conversationName">conversation image</span>
    </div>
  );
}

export default Conversation;
