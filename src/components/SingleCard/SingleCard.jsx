import React from "react";
import "./singleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleCard = ({ blog, marksRead, handleBookmark }) => {
  const { id, img, userImg, author, time, date, title, read } = blog;

  /* const handleBookMarks=props.handleBookMarks
    const marksRead= props.marksRead */

  return (
    <div className="single-container">
      <div className="cover-image">
        <img className="coverImg" src={img} alt="" />
      </div>
      <div className="author-time-container">
        <div className="info-container">
          <img className="userImg" src={userImg} alt="" />
          <div>
            <h4 className="authorInfo">{author}</h4>
            <p>{date}</p>
          </div>
        </div>
        <div className="time-info">
          <p>{time}</p>
          <span>
            <FontAwesomeIcon
              className="font-awesome"
              onClick={() => handleBookmark(id, title)}
              icon={faBookmark}
            ></FontAwesomeIcon>
          </span>
        </div>
      </div>

      <div></div>
      <h3 className="title">{title}</h3>
      <a onClick={() => marksRead(read)} className="ancor">
        Mark as read
      </a>
      <hr />
    </div>
  );
};

export default SingleCard;
