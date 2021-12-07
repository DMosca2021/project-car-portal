import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT, ADD_VEHICLE } from "../utils/mutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
          <div className="hero is-halfheight" id="form-container">
            <div className="columns is-multiline is-mobile">
              <div className="column is-5">
                <div className="field">
                  <p class="control has-icons-left">
                    <input
                      class="input is-normal"
                      type="text"
                      placeholder="Project Date"
                    ></input>
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-5">
                <div className="field">
                  <p class="control has-icons-left">
                    <input
                      class="input is-normal"
                      type="text"
                      placeholder="Budget"
                    ></input>
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon icon={faDollarSign} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-4">
                <div className="field">
                  <p class="control has-icons-left">
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
              <div className="column is-10">
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="description"
                      placeholder="Description"
                    ></input>
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon icon={faFileSignature} />
                    </span>
                  </p>
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
