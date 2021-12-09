import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHighlighter } from "@fortawesome/free-solid-svg-icons";

function Signup(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
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
    <div className="columns is-mobile">
      <div className="column is-10 is-offset-1" id="board-container">
        <form className="hero is-halfheight" onSubmit={handleFormSubmit}>
          <h1 className="column is-4 is-offset-5">
            Add a project here _<FontAwesomeIcon icon={faHighlighter} />
          </h1>
          <div className="column is-4 is-offset-4">
            <div className="field">
              <label htmlFor="firstName">First Name:</label>
              <input
                className="input is-small"
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="column is-4 is-offset-4">
            <div className="field">
              <label htmlFor="lastName">Last Name:</label>
              <input
                className="input is-small"
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="column is-4 is-offset-4">
            <div className="field">
              <label htmlFor="email">Email:</label>
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
              <label htmlFor="pwd">Password:</label>
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
                Please Fill out the form or go back to the homepage!
              </p>
            </div>
          ) : null}
          <div className="column is-full" id="submit-btn">
            <div className="field is-grouped is-grouped-centered">
              <div className="buttons">
                <button className="button is-dark" type="submit">
                  Submit
                </button>
                <Link className="button is-light" to="/">
                  <FontAwesomeIcon icon={faHome} />
                  Home
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
