import React, { useEffect } from "react";
import { useState } from "react";
import "../src/css/app.css";
import Footer from "./components/footer/footer";
import SearchBox from "./components/searchbox/searchBox";
import Header from "./components/header/header";
import Answer from "./components/answer/answer";
import Loader from "./loader";

function App() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  },[]);
  return (
    <div className="bg">
      {loader ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <SearchBox text={setAnswer} />
          <Answer ans={answer} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
