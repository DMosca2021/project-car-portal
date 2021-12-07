import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { QUERY_PROJECTS } from "../utils/queries";
import ProjectList from "../components/ProjectList";

function CurrentProjects() {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  let projects = data?.projects || [];
  console.log(projects);
  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
          <div className="hero is-halfheight" id="home-container">
            List of projects goes here
            <div className="columns">
              <div className="column is-6">
                {loading ? (
                  <div id="project-text">Loading...</div>
                ) : (
                  <ProjectList projects={projects} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentProjects;
