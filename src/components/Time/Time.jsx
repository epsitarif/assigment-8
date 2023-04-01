import React, { useEffect, useState } from "react";
import "./Time.css";

const Time = ({ timeWatch }) => {
  const [showTime, setShowTime] = useState(timeWatch);

  useEffect(() => {
    const getTimeFromStorage = localStorage.getItem("Add-Time");
    setShowTime(getTimeFromStorage);
  }, [timeWatch]);

  return (
    <h3 className="bookmark-header">
      Spent time on read : {showTime || 0} min
    </h3>
  );
};

export default Time;
