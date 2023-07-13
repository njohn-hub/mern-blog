import React from "react";
import "./home.css";
import Header from "../../Components/header/Header";
import SideBar from "../../Components/sidebar/SideBar";
import Posts from "../../Components/posts/Posts";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
