import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/15045597/pexels-photo-15045597/free-photo-of-aerial-photography-of-city-buildings.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>JOHN</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi hic
          sint dolor sunt a consequatur sapiente ratione eum vitae ad
          repellendus molestiae totam vero doloribus, quidem culpa, provident
          animi officia odit nulla incidunt. Perferendis iure obcaecati, dolorum
          commodi quos mollitia nisi voluptas magnam reprehenderit architecto
          ipsa rerum sint deleniti! Placeat perspiciatis incidunt, provident
          totam ea vel est recusandae nulla voluptates nemo possimus molestias
          iste tempora ex obcaecati cupiditate, ipsum a accusamus sapiente
          voluptas quasi quibusdam sit voluptate accusantium? Eius
          exercitationem maiores impedit quas ducimus qui. Modi, iure quia amet
          officia distinctio voluptatem, aperiam quis laboriosam sunt voluptas
          suscipit fugiat quas unde expedita excepturi, omnis accusantium
          eligendi. Porro laboriosam molestiae consequuntur quam at dolor
          deserunt, vitae est incidunt vel eveniet voluptate. Voluptates autem
          placeat id iure saepe eos pariatur corrupti quod repellendus ad,
          soluta est? Porro, tenetur. Tenetur voluptates magnam quod voluptatum,
          pariatur distinctio dolore commodi, eos qui itaque suscipit alias?
          Voluptate, nesciunt architecto. Vitae quos odio dolor accusantium
          laudantium ea vero earum assumenda temporibus rerum maxime at expedita
          sed deserunt ipsam, veritatis, placeat rem perferendis eaque quisquam
          repudiandae cumque quae aut illum? Cumque suscipit maiores quasi
          facilis! Impedit reiciendis, fuga est dolor provident exercitationem
          nemo officia, cum, debitis quasi deleniti.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
