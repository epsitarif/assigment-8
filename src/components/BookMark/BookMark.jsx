import React, { useEffect, useState } from "react";
import Time from "../Time/Time";
import "./BookMark.css";

const BookMark = ({ timeWatch, showBookmark }) => {
  const [bookmarkTitle, setBookmarkTitle] = useState(showBookmark);

  useEffect(() => {
    const previousBookMark = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmarkTitle(previousBookMark);
  }, [showBookmark]);
  return (
    <div>
      <Time timeWatch={timeWatch}></Time>
      <div className="bookmark-title">
        <h2>Bookmarks : {bookmarkTitle?.length}</h2>
        {bookmarkTitle?.map((bk) => (
          <h3 className="title">{bk?.title}</h3>
        ))}
      </div>
    </div>
  );
};

export default BookMark;
