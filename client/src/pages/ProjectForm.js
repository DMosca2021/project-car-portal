import React, { useState } from "react";
import Auth from "../utils/auth";
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

function AddProject(props) {
  const [formState, setFormState] = useState({
    //props?
    name: "",
    description: "",
    budget: "",
    timeSpent: "",
  });
  const [addProject] = useMutation(ADD_PROJECT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const mutationResponse = await addProject({
      variables: {
        name: formState.name,
        description: formState.description,
        budget: formState.budget,
        timeSpent: formState.timeSpent,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    console.log(mutationResponse);
    console.log(token);
    console.log(Auth.login(token));
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const fileInput = document.querySelector('file-input');
  // fileInput.onchange = () => {
  //   if (fileInput.files.length > 0) {
  //     const fileName = document.querySelector('file-name');
  //     fileName.textContent = fileInput.files[0].name;
  //   }
  // }

  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
          <div className="hero is-halfheight" id="form-container">
            <div className="columns is-multiline is-mobile">
              <div className="column is-5 is-offset-1">
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-normal"
                      type="text"
                      placeholder="Project Date"
                    ></input>
                    <span class="icon is-small is-left">
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
                      type="number"
                      placeholder="Budget"
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
                      class="input is-normal"
                      type="text"
                      placeholder="Name"
                    ></input>
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon icon={faCar} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-10 is-offset-1">
                <div className="field">
                  <p className="control has-icons-left">
                    <textarea
                      className="textarea"
                      placeholder="Description"
                    ></textarea>
                    {/* <span class="icon is-small is-right">
                      <FontAwesomeIcon icon={faImages} />
                    </span> */}
                  </p>
                </div>
              </div>
              <div className="column is-5 is-offset-1">
                <div className="field">
                  <div className="file has-name">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="resume"
                      ></input>
                      <span className="file-cta">
                        <span className="file-icon">
                          <FontAwesomeIcon icon={faImages} />
                        </span>
                        <span className="file-label"><FontAwesomeIcon icon={faUpload} /></span>
                      </span>
                      <span className="file-name"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="column is-5">
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="number"
                      placeholder="Time spent in hours"
                    ></input>
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon icon={faStopwatch} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column">
                <div class="field is-grouped is-grouped-centered">
                  <div class="control">
                    <button class="button is-link">Submit</button>
                  </div>
                  <div class="control">
                    <button class="button is-link is-light">Cancel</button>
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

export default AddProject;
