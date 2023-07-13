import React from "react";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="sideBarImg"
          src="https://images.pexels.com/photos/14796538/pexels-photo-14796538.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          eligendi vero esse similique consectetur laborum
        </p>
      </div>
      <div className="sideBarItem">
        <div className="sideBarTitle">CATEGORIES</div>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sideBarItem">
        <div className="sideBarTitle">FOLLOW US</div>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-twitter"></i>
          <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
          <i className="sideBarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
