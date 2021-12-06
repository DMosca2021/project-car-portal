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

  return (
    <>
      <div className="hero is-halfheight" id="form-container">


        <div className="ui center aligned piled grey very padded segment" id="form-card">
          <form className="ui form" id="form">
            <h4 className="ui dividing header">Project Information</h4>

            <div className="six wide field">
              <label>Project Started On</label>
              <input
                type="text"
                name="project[date]"
                placeholder="Date"
              ></input>
            </div>

            <div className="six wide field">
              <label>
                Project Total Budget{" "}
                <i className="money bill alternate outline icon"></i>
              </label>
              <input
                type="text"
                name="project[budget]"
                placeholder="Budget"
              ></input>
            </div>

            <div className="six wide field">
              <label>Time Spent On Project</label>
              <input
                type="text"
                name="shipping[last-name]"
                placeholder="# of Hours"
              ></input>
            </div>

            <div className="seven wide field">
              <label>Project Name</label>
              <input
                type="text"
                name="shipping[address-2]"
                placeholder="Name of your project"
              ></input>
            </div>

            <div className="seven wide field">
              <label>Project Description</label>
              <input
                type="text"
                name="shipping[address]"
                placeholder="A breif description of your project"
              ></input>
            </div>

            <div className="seven wide field">
              <label>Project Image</label>
              <input
                type="text"
                name="shipping[address]"
                placeholder="A picture of your project"
              ></input>
            </div>

            <h4 className="ui dividing header">Vehicle Information</h4>

            <div className="seven wide field">
              <label>Vehicle Type</label>
              <input
                type="text"
                name="shipping[address-2]"
                placeholder="Type of vehicle"
              ></input>
            </div>

            <div className="field">
              <div className="three fields">
                <div className="field">
                  <label>Year</label>
                  <input
                    type="text"
                    name="shipping[first-name]"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="field">
                  <label>Make</label>
                  <input
                    type="text"
                    name="shipping[last-name]"
                    placeholder="Last Name"
                  ></input>
                </div>
                <div className="field">
                  <label>Model</label>
                  <input
                    type="text"
                    name="shipping[last-name]"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>
            </div>

            <div className="fields">
              <div className="seven wide field">
                <label>Card Number</label>
                <input
                  type="text"
                  name="card[number]"
                  maxLength="16"
                  placeholder="Card #"
                ></input>
              </div>
              <div className="three wide field">
                <label>CVC</label>
                <input
                  type="text"
                  name="card[cvc]"
                  maxLength="3"
                  placeholder="CVC"
                ></input>
              </div>
            </div>
            <div className="ui button" tabIndex="0">
              Submit Order
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProject;
