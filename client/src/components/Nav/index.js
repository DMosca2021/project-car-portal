import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/currentProjects">Current Projects</Link>
          </li>
          <li className="mx-1">
            <Link to="/projectForm">Create a New Project</Link>
          </li>
          <li>
            <Link to="/">← Back to Home</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div>
      {/* <header className="flex-row px-1" id="nav-bar">
      <h1>
        <Link to="/">Project Car Portal</Link>
      </h1>

      <nav >{showNavigation()}</nav>
    </header>
     */}
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <div class="navbar-item">
          <Link to="/">Project Car Portal</Link>
          </div>
          <div
            class="navbar-burger"
            data-target="navbar-main"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbar-main" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a
                class="navbar-link"
                href="https://bulma.io/documentation/overview/start/"
              >
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/overview/start/"
                >
                  Overview
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/overview/modifiers/"
                >
                  Modifiers
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/columns/basics/"
                >
                  Columns
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/layout/container/"
                >
                  Layout
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/form/general/"
                >
                  Form
                </a>
                <hr class="navbar-divider"></hr>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/elements/box/"
                >
                  Elements
                </a>
                <a
                  class="navbar-item is-active"
                  href="https://bulma.io/documentation/components/breadcrumb/"
                >
                  Components
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a
                    class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                  >
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a
                    class="button is-primary"
                    href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip"
                  >
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
