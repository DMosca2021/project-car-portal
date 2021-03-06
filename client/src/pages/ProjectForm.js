import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT, ADD_VEHICLE } from "../utils/mutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faUpload,
  faImages,
  faDollarSign,
  faCalendarAlt,
  faCar,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";

function CreateProject(props) {
  const [formState, setFormState] = useState({
    projectDate: "",
    name: "",
    description: "",
    image: "",
    budget: "",
    timeSpent: "",
  });

  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    errorPolicy: "all",
  });

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const mutationResponse = await addProject({
        variables: {
          input: formState,
        },
      });
      console.log(mutationResponse);
      const token = mutationResponse.data.addProject.token;
      Auth.login(token);
    } catch (e) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    if (type === "number") {
      value = parseInt(value);
    }
    setFormState({
      ...formState,
      [name]: value,
    });

    // const fileInput = document.querySelector('file-input');
    // fileInput.onchange = () => {
    //   if (fileInput.files.length > 0) {
    //     const fileName = document.querySelector('file-name');
    //     fileName.textContent = fileInput.files[0].name;
    //   }
  };

  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1" id="board-container">
          <form className="hero is-halfheight" onSubmit={handleFormSubmit}>
            <h1 className="column is-3 is-offset-5">
              Add a project here _<FontAwesomeIcon icon={faHighlighter} />
            </h1>
            <div className="columns is-multiline is-mobile">
              <div className="column is-4 is-offset-2">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="projectDate"
                      type="date"
                      placeholder="Project Date"
                      onChange={handleChange}
                    ></input>
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-4 ">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="budget"
                      type="number"
                      placeholder="Budget"
                      onChange={handleChange}
                    ></input>
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faDollarSign} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-6 is-offset-2">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                    ></input>
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faCar} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-8 is-offset-2">
                <div className="field">
                  <p className="control has-icons-left">
                    <textarea
                      name="description"
                      className="textarea"
                      placeholder="Description"
                      type="text"
                      onChange={handleChange}
                    ></textarea>
                  </p>
                </div>
              </div>
              <div className="column is-3 is-offset-2">
                <div className="field">
                  <div className="file has-name">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="image"
                        onChange={handleChange}
                        disabled
                      ></input>
                      <span className="file-cta">
                        <span className="file-icon">
                          <FontAwesomeIcon icon={faImages} />
                        </span>
                        <span className="file-label">
                          <FontAwesomeIcon icon={faUpload} />
                        </span>
                      </span>
                      <span className="file-name" placeholder="File">
                        Coming Soon
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="column is-5">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="timeSpent"
                      type="number"
                      placeholder="Time spent in hours"
                      onChange={handleChange}
                    ></input>
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faStopwatch} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-full" id="submit-btn">
                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button
                      className="button is-dark"
                      type="submit"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button is-light">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProject;
