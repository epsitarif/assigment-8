import React from "react";

const QueAndA = () => {
  return (
    <div>
      <span>
        <div>
          <div>Question: Different between props and state?</div>

          <div>Answer: State is owned locally and the component itself updates it. Props are owned and
          read-only by a parent.</div>
        </div>
        <div>
          <div>Question: How does useState work?</div>
          <div>Answer: useState is React Hook that
          allows you to add state to a functional component.</div>
        </div>
        <div>Question: What else does useEffect do other than loading data?</div>
        <div>Answer: fetching data, directly updating the DOM, and timers.</div>
        <div>Question: How does react work?</div>
        <div>Answer: ReactJS divides the UI into isolated reusable pieces
        of code known as components.</div>
      </span>
    </div>
  );
};

export default QueAndA;
