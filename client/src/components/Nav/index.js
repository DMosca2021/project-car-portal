import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faTruckPickup } from "@fortawesome/free-solid-svg-icons";
import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import { faHome, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";


function Nav() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });

  function showLogOut() {
    if (Auth.loggedIn()) {
      return (
        <Link className="button is-light" to="/" onClick={() => Auth.logout()}>
          <FontAwesomeIcon icon={faClipboardCheck} />
          Logout
        </Link>
      );
    } else {
      return (
        <Link className="button is-light" to="/login">
          <FontAwesomeIcon icon={faClipboardCheck} />
          Log in
        </Link>
      );
    }
  }

  return (
    <div className="columns">
      <div className="column is-full">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              href="https://project-car-portal.herokuapp.com/"
            >
              <img src="https://cdn.w600.comps.canstockphoto.com/auto-mechanic-icon-outline-style-vector-clipart_csp86172306.jpg"></img>
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/"><FontAwesomeIcon icon={faHome} />
                - Home
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/projectForm">
                    {" "}
                    Create Project_<FontAwesomeIcon icon={faTruckPickup} />
                  </Link>
                  <Link className="navbar-item" to="/currentProjects">
                    Current Projects_<FontAwesomeIcon icon={faTruckMonster} />
                  </Link>
                  {/* <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item">Report an issue</a> */}
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link
                    className="button is-dark "
                    to="/signup"
                    id="signup-btn"
                  >
                    <FontAwesomeIcon icon={faClipboardList} id="login-icon" />
                    Sign up{" "}
                  </Link>
                  {showLogOut()}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
