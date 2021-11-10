import React from "react";
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message own={true} />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                name=""
                placeholder="write something here..."
                className="chatMessageInput"
                cols="30"
                rows="10"
              ></textarea>
              <button className="chatSubmitButton"></button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className=" chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
