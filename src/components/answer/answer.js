import React from "react";
import "../../css/app.css";

const Answer = (props) => {
  const answer = props.ans;
  // const answer = "MESSI";

  return (
      <div className="paragraph">
        {answer === null ? <h1> ASK A QUESTION? </h1> : <p>{answer}</p>}
      </div>
  );
};

export default Answer;
