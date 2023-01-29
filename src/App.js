import { useState } from "react";
import "../src/css/app.css";
import Answer from "./components/answer/answer";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import SearchBox from "./components/searchbox/searchBox";

function App() {

  const [answer, setAnswer] = useState(null);
  return (
    <div className="bg">
     <Header/>
     <SearchBox text={setAnswer} />
     <Answer ans={answer}/>
     <Footer/>
    </div>
  );
}

export default App;
