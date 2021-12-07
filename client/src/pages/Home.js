import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="columns is-mobile">
      <div className="column is-10 is-offset-1">
        <div className="hero is-halfheight" id="home-container">
          <br></br>
          <h1 id="welcome-font">
            Welcome to the Project car Portal!<br></br>
            Currently I am getting this project off the jackstands so check back
            soon for an updated page. _<FontAwesomeIcon icon={faHighlighter} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
