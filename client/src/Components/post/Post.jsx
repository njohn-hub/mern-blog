import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/15045597/pexels-photo-15045597/free-photo-of-aerial-photography-of-city-buildings.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum consectetur adipisicing</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        voluptate aliquid obcaecati odio molestias illum iste nulla ab ullam
        minus velit magni incidunt temporibus architecto, eum nostrum, voluptas
        quod fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        voluptate aliquid obcaecati odio molestias illum iste nulla ab ullam
        minus velit magni incidunt temporibus architecto, eum nostrum, voluptas
        quod fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        voluptate aliquid obcaecati odio molestias illum iste nulla ab ullam
        minus velit magni incidunt temporibus architecto, eum nostrum, voluptas
        quod fugiat?
      </p>
    </div>
  );
};

export default Post;
