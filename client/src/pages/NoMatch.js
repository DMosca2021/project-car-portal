import React from "react";
import Jumbotron from "../components/Jumbotron";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarCrash } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faSmog } from '@fortawesome/free-solid-svg-icons';
import { faHighlighter } from '@fortawesome/free-solid-svg-icons';

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>
          <div className="hero is-halfheight" id="home-container">
          <h1>404 Page Not Found</h1>
          <div>
          _____<FontAwesomeIcon icon={faSmog} /><FontAwesomeIcon icon={faCarSide} /><FontAwesomeIcon icon={faCarCrash} />_<FontAwesomeIcon icon={faHighlighter} />
          </div>
          </div>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
