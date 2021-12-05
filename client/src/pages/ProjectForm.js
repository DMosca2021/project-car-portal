import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT, ADD_VEHICLE } from "../utils/mutations";

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
      <form class="ui form">
        <h4 class="ui dividing header">Shipping Information</h4>
        <div class="field">
          <label>Name</label>
          <div class="two fields">
            <div class="field">
              <input
                type="text"
                name="shipping[first-name]"
                placeholder="First Name"
              ></input>
            </div>
            <div class="field">
              <input
                type="text"
                name="shipping[last-name]"
                placeholder="Last Name"
              ></input>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Billing Address</label>
          <div class="fields">
            <div class="twelve wide field">
              <input
                type="text"
                name="shipping[address]"
                placeholder="Street Address"
              ></input>
            </div>
            <div class="four wide field">
              <input
                type="text"
                name="shipping[address-2]"
                placeholder="Apt #"
              ></input>
            </div>
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>State</label>
            <select class="ui fluid dropdown">
              <option value="">State</option>
            </select>
          </div>
          <div class="field">
            <label>Country</label>
            <div class="ui fluid search selection dropdown">
              <input type="hidden" name="country"></input>
              <i class="dropdown icon"></i>
              <div class="default text">Select Country</div>
              <div class="menu"></div>
            </div>
          </div>
        </div>
        <h4 class="ui dividing header">Billing Information</h4>
        <div class="field">
          <label>Card Type</label>
          <div class="ui selection dropdown">
            <input type="hidden" name="card[type]"></input>
            <div class="default text">Type</div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" data-value="visa">
                <i class="visa icon"></i>
                Visa
              </div>
              <div class="item" data-value="amex">
                <i class="amex icon"></i>
                American Express
              </div>
              <div class="item" data-value="discover">
                <i class="discover icon"></i>
                Discover
              </div>
            </div>
          </div>
        </div>
        <div class="fields">
          <div class="seven wide field">
            <label>Card Number</label>
            <input
              type="text"
              name="card[number]"
              maxlength="16"
              placeholder="Card #"
            ></input>
          </div>
          <div class="three wide field">
            <label>CVC</label>
            <input
              type="text"
              name="card[cvc]"
              maxlength="3"
              placeholder="CVC"
            ></input>
          </div>
          <div class="six wide field">
            <label>Expiration</label>
            <div class="two fields">
              <div class="field">
                <select
                  class="ui fluid search dropdown"
                  name="card[expire-month]"
                >
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div class="field">
                <input
                  type="text"
                  name="card[expire-year]"
                  maxlength="4"
                  placeholder="Year"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <h4 class="ui dividing header">Receipt</h4>
        <div class="field">
          <label>Send Receipt To:</label>
          <div class="ui fluid multiple search selection dropdown">
            <input type="hidden" name="receipt"></input>
            <i class="dropdown icon"></i>
            <div class="default text">Saved Contacts</div>
            <div class="menu">
              <div class="item" data-value="jenny" data-text="Jenny">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/jenny.jpg"
                ></img>
                Jenny Hess
              </div>
              <div class="item" data-value="elliot" data-text="Elliot">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/elliot.jpg"
                ></img>
                Elliot Fu
              </div>
              <div class="item" data-value="stevie" data-text="Stevie">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/stevie.jpg"
                ></img>
                Stevie Feliciano
              </div>
              <div class="item" data-value="christian" data-text="Christian">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/christian.jpg"
                ></img>
                Christian
              </div>
              <div class="item" data-value="matt" data-text="Matt">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/matt.jpg"
                ></img>
                Matt
              </div>
              <div class="item" data-value="justen" data-text="Justen">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/justen.jpg"
                ></img>
                Justen Kitsune
              </div>
            </div>
          </div>
        </div>
        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input
                type="checkbox"
                name="gift"
                tabindex="0"
                class="hidden"
              ></input>
              <label>Do not include a receipt in the package</label>
            </div>
          </div>
        </div>
        <div class="ui button" tabindex="0">
          Submit Order
        </div>
      </form>
      {/* ---------------------------------------------------------------------------------------------- */}
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control">
            <input
              placeholder=""
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
              placeholder=""
              name="description"
              type="description"
              id="description"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* div for image upload section of project form. */}
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
              placeholder=""
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
              placeholder=""
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
