import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img
        className="headerImg"
        src="https://images.pexels.com/photos/17024198/pexels-photo-17024198/free-photo-of-parts-of-a-pink-anemone-on-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt=""
      />
    </div>
  );
};

export default Header;
