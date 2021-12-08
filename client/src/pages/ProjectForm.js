import React, { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

function CreateProject(props) {
  // if (!Auth.loggedIn()) {
  //   return <h3>Please Log in</h3>
  // }

  const [formState, setFormState] = useState({
    projDate: "",
    name: "",
    description: "",
    image: "",
    budget: "",
    timeSpent: "",
  });

  // const [projDate, setProjDate] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  // const [budget, setBudget] = useState("");
  // const [timeSpent, setTimeSpent] = useState("");

  const [addProject] = useMutation(ADD_PROJECT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addProject({
      variables: {
        projDate: formState.projDate,
        name: formState.name,
        description: formState.description,
        budget: formState.budget,
        timeSpent: formState.timeSpent,
      },
    });
    console.log(mutationResponse);
    const token = mutationResponse.data.addProject.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    //   const { target } = event;
    //   const inputType = target.name;
    //   const inputValue = target.value;

    //   if (inputType === "date") {
    //     setProjDate(inputValue);
    //   } else if (inputType === "name") {
    //     setName(inputValue);
    //   } else if (inputType === "description") {
    //     setDescription(inputValue);
    //   } else if (inputType === "image") {
    //     setImage(inputValue);
    //   } else if (inputType === "budget") {
    //     setBudget(inputValue);
    //   } else {
    //     setTimeSpent(inputValue);
    //   }
    // };

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
        <div className="column is-10 is-offset-1">
          <div className="hero is-halfheight" id="form-container">
            <h1>Add a project here</h1>
            <div className="columns is-multiline is-mobile">
              <div className="column is-5 is-offset-1">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="date"
                      // value={projDate}
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
              <div className="column is-5 ">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="budget"
                      // value={budget}
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
              <div className="column is-6 is-offset-1">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="name"
                      // value={name}
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
              <div className="column is-10 is-offset-1">
                <div className="field">
                  <p className="control has-icons-left">
                    <textarea
                      // value={description}
                      name="description"
                      className="textarea"
                      placeholder="Description"
                      onChange={handleChange}
                    ></textarea>
                  </p>
                </div>
              </div>
              <div className="column is-5 is-offset-1">
                <div className="field">
                  <div className="file has-name">
                    <label className="file-label">
                      <input
                        className="file-input"
                        // value={image}
                        type="file"
                        name="image"
                        onChange={handleChange}
                      ></input>
                      <span className="file-cta">
                        <span className="file-icon">
                          <FontAwesomeIcon icon={faImages} />
                        </span>
                        <span className="file-label">
                          <FontAwesomeIcon icon={faUpload} />
                        </span>
                      </span>
                      <span className="file-name" placeholder="File"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="column is-5">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      name="time"
                      // value={timeSpent}
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
              <div className="column" id="submit-btn">
                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button
                      className="button is-link"
                      type="submit"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProject;
