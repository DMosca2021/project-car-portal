import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>
          <div className="hero is-halfheight" id="home-container">
          <h1>404 Page Not Found</h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
          </div>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
