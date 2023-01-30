import React from "react";
import "../../css/app.css";

type ACTIONTYPES = {ans:string | null}

const Answer = (props:ACTIONTYPES) => {
  const answer:string | null = props.ans;
  // const answer = "MESSI";

  return (
      <div className="paragraph">
        {answer === null ? <h1> ASK A QUESTION? </h1> : <p>{answer}</p>}
      </div>
  );
};

export default Answer;
