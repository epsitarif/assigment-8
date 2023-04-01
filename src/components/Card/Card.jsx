import React, { useEffect, useState } from "react";
import BookMark from "../BookMark/BookMark";
import SingleCard from "../SingleCard/SingleCard";
import "./Card.css";

const Card = () => {
  const [blogs, setCards] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  //mark read
  const [timeWatch, setTimeWatch] = useState("");
  const marksRead = (times) => {
    const previousTime = JSON.parse(localStorage.getItem("Add-Time"));
    if (previousTime) {
      const addSum = previousTime + times;
      localStorage.setItem("Add-Time", addSum);
      setTimeWatch(addSum);
    } else {
      localStorage.setItem("Add-Time", times);
      setTimeWatch(times);
    }
  };

  // bookmark
  const [showBookmark, setShowBookmark] = useState([]);
  const handleBookmark = (id, title) => {
    const previousBookMark = JSON.parse(localStorage.getItem("bookmarks"));
    const bookmarkArray = [];
    const bookmarkObj = { id, title };
    console.log(bookmarkObj);
    if (previousBookMark) {
      const isAdded = previousBookMark.find((bkId) => bkId.id == id);
      if (isAdded) {
        // here the alert

        return;
      } else {
        bookmarkArray.push(...previousBookMark, bookmarkObj);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarkArray));
        setShowBookmark(bookmarkArray);
      }
    } else {
      bookmarkArray.push(bookmarkObj);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarkArray));
      setShowBookmark(bookmarkArray);
    }
  };

  return (
    <div className="main-container">
      <div className="card-container">
        {blogs?.map((blog) => (
          <SingleCard
            blog={blog}
            marksRead={marksRead}
            handleBookmark={handleBookmark}
          ></SingleCard>
        ))}
      </div>
      <div className="bookmark-container">
        <BookMark timeWatch={timeWatch} showBookmark={showBookmark}></BookMark>
      </div>
    </div>
  );
};
export default Card;
