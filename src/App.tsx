import React from "react";
import { useState } from "react";
import "../src/css/app.css";
import Footer from "./components/footer/footer";
import SearchBox from "./components/searchbox/searchBox";
import Header from "./components/header/header";
import Answer from "./components/answer/answer";
function App() {
  const [answer, setAnswer] = useState<string | null>(null);
  return (
    <div className="bg">
      <Header />
      <SearchBox text={setAnswer} />
      <Answer ans={answer} />
      <Footer />
    </div>
  );
}

export default App;
