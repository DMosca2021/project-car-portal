import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT, ADD_VEHICLE } from "../utils/mutations";

function AddProject(props) {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    budget: "",
    timeSpent: "",
  });
  const [addProject] = useMutation(ADD_PROJECT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //  Function from bulma docs for selecting a local file, for image upload.
  /* const fileInput = document.querySelector("#file-js-example input[type=file]");
      fileInput.onchange = () => {
      if (fileInput.files.length > 0) {
      const fileName = document.querySelector("#file-js-example .file-name");
      fileName.textContent = fileInput.files[0].name;
    }
  }; */

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control">
            <input
              placeholder="Project Name"
              name="name"
              type="name"
              id="projectName"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="description">
            Description
          </label>
          <div className="control">
            <input
              placeholder="Project Description"
              name="description"
              type="description"
              id="description"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <div id="file-js-example" className="file has-name">
        <label className="file-label"> Project Pictures
          <input className="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">No file uploaded</span>
        </label>
      </div> */}

        <div className="field">
          <label className="label" htmlFor="budget">
            Budget
          </label>
          <div className="control">
            <input
              placeholder="What's your budget?"
              name="budget"
              type="budget"
              id="budget"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="timeSpent">
            Time Spent on Project
          </label>
          <div className="control">
            <input
              placeholder="How many hours have you spent working?"
              name="timeSpent"
              type="timeSpent"
              id="time"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <div className="field">
        <label className="label">Type</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Car</option>
              <option>Motorcycle</option>
              <option>Truck</option>
              <option>Boat</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div> */}

        <div className="field is-grouped">
          <div className="control">
            <button type="submit">Add Project</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProject;
