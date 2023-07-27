import React from "react";
import "../join/Join.css";
import { useRef } from "react";

const Join = () => {
  const form = useRef();

  return (
    <div className="join" id="#join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="email-container" ref={form}>
          <input type="email" name="user-email" placeholder="Enter email" />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
