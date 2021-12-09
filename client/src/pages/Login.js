import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1" id="board-container">
          <form className="hero is-halfheight" onSubmit={handleFormSubmit}>
            <h2 className="column is-4 is-offset-5">
              Login Here _<FontAwesomeIcon icon={faHighlighter} />
            </h2>
            <div className="column is-4 is-offset-4">
              <div className="field">
                <label htmlFor="email">Email address: </label>
                <input
                  className="input is-small"
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="column is-4 is-offset-4">
              <div className="field">
                <label htmlFor="pwd">Password: </label>
                <input
                  className="input is-small"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>
            </div>

            {error ? (
              <div className="column is-6 is-offset-3">
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <div className="column is-full" id="submit-btn">
              <div className="field is-grouped is-grouped-centered">
                <div className="buttons">
                  <button className="button is-dark" type="submit">
                    Submit
                  </button>
                  <Link className="button is-dark" to="/signup">
                    <FontAwesomeIcon icon={faClipboardList} /> Go to Signup
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
