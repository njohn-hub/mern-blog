import React from "react";
import "./settings.css";
import SideBar from "../../Components/sidebar/SideBar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPp">
            <img
              src="https://images.pexels.com/photos/3524917/pexels-photo-3524917.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">UserName</label>
          <input type="text" placeholder="John" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
