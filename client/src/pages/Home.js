import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="columns is-mobile">
      <div className="column is-10 is-offset-1">
        <div className="hero is-halfheight" id="board-container">
          <br></br>
          <h1 id="welcome-font">
            Welcome to the Project car Portal!<br></br>
            Sign up or Log in to begin keeping <br></br>
            track of your projects! _<FontAwesomeIcon icon={faHighlighter} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
