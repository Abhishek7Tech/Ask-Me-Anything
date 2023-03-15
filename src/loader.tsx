import React from "react";
import "./loader.scss";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner">
        <iframe
          src="https://giphy.com/embed/iJOZwC1R7WVxAxs4Gs"
          title="loader"
        ></iframe>
      </div>
    </div>
  );
}

export default Loader;
