import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar" id="option-test">
          <div className="navbar-item">
            <Link to="/currentProjects">Current Projects</Link>
          </div>
          <div className="navbar-item">
            <Link to="/projectForm">Create a New Project</Link>
          </div>
          <div>
            <Link to="/">← Back to Home</Link>
          </div>
          <div className="mx-1">
            <Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar" id="option-test">
          <div className="navbar-item">
            <Link to="/signup">Signup</Link>
          </div>
          <div className="navbar-item">
            <Link to="/login">Login</Link>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="columns is-mobile">
      <div className="column is-full">
      <header className="navbar" id="nav-bar">
      <h1>
        <Link to="/">Project Car Portal</Link>
      </h1>

      <nav className="column is-half">{showNavigation()}</nav>
    </header>
    </div>
    </div>
  );
}

export default Nav;
