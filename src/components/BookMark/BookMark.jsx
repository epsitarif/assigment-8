import React from "react";
import Time from "../Time/Time";
import "./BookMark.css"

const BookMark = ({timeWatch}) => {
  return (
    <div>
      <Time timeWatch={timeWatch}></Time>
      <div className="bookmark-title">

      </div>
    </div>
  );
};

export default BookMark;
