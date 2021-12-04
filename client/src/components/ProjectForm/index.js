import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PROJECT } from "../../utils/actions";

export default function ProjectForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDesc, setNewProjectDesc] = useState("");
  const [newProjectImg, setNewProjectImg] = useState("");
  const [newProjectBudg, setNewProjectBudg] = useState("");
  const [newProjectTime, setNewProjectTime] = useState("");

  // const fileInput = document.querySelector("#file-js-example input[type=file]");
  // fileInput.onchange = () => {
  //   if (fileInput.files.length > 0) {
  //     const fileName = document.querySelector("#file-js-example .file-name");
  //     fileName.textContent = fileInput.files[0].name;
  //   }
  // };

  return (
    <>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
              defaultValue={newCarMake}
              onChange={(event) => setNewProjectName(event.target.value)}
              placeholder="New car make..."
              type="text"
            />
        </div>
      </div>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
              defaultValue={newCarMake}
              onChange={(event) => setNewProjectDesc(event.target.value)}
              placeholder="New car make..."
              type="text"
            />
        </div>
      </div>

      <div id="file-js-example" class="file has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            {/* <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span> */}
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">No file uploaded</span>
        </label>
      </div>

      <div className="field">
        <label className="label">Budget</label>
        <div className="control">
          <input
              defaultValue={newCarMake}
              onChange={(event) => setNewProjectBudg(event.target.value)}
              placeholder="New car make..."
              type="text"
            />
        </div>
      </div>

      <div className="field">
        <label className="label">Time Spent on Project</label>
        <div className="control">
          <input
              defaultValue={newCarMake}
              onChange={(event) => setNewProjectTime(event.target.value)}
              placeholder="New car make..."
              type="text"
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
          <button
              onClick={() =>
                dispatch({
                  type: ADD_PROJECT,
                  payload: {
                    make: newCarMake,
                    model: newCarModel,
                    year: newCarYear,
                  },
                })
              }
            >
              Add Project
            </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </>
  );
}
