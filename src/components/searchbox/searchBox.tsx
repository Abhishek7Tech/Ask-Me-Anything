import React, { useState } from "react";
import "../../css/app.css";
import getAnswer from "../../api/api";

type ACTIONTYPE = { text: (string: string) => void };

const SearchBox = (props: ACTIONTYPE) => {
  const [input, setInput] = useState<string>("");
  const [token, setToken] = useState<number>(0);
  const [click, setClick] = useState<string>(" Ask! ");

  const InputHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (input.length > 1) {
      setClick("Loading...");
      const ans = await getAnswer(input);
      if(!ans){
        alert("Something Went Wrong! 😢😢 Please Try Again and refresh the brwoser✌");
        setClick("Ask!");
      }
      props.text(ans.choices[0].text);
      const tokens = ans.usage.completion_tokens;
      setToken(+tokens + token);
      setClick("Ask!")
      setInput("");
    } else {
      alert("Is this even a question? 😂🤣😂😒");
    }
    (event.target as any).reset();
  };

  const questionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setInput((event.target as HTMLInputElement).value);
  };

  // const clickHandler = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (input) {
  //     setClick("Loading...");
  //   }
  // };

  return (
    <form onSubmit={InputHandler} className="search">
      <div className="input">
        <input
          onChange={questionHandler}
          type="text"
          placeholder="Ask a question..."
        ></input>
      </div>
      <div className="submit">
        <button  type="submit">
          {click}
        </button>
      </div>
      <h3>Token Used: {token} </h3>
    </form>
  );
};

export default SearchBox;
