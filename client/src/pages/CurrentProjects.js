import React, { useState } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utils/queries";
import ProjectList from "../components/ProjectList";

function CurrentProjects() {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  console.log(data);
  let projects = data?.projects || [];
  console.log(projects);

  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
          <div className="hero is-halfheight" id="board-container">
                {loading ? ( <div id="project-text">Loading...</div>) : (
                  <div className="columns is-mobile">
                    <div className="column is-8 is-offset-2">
                      <ProjectList projects={projects} />
                    </div>
                  </div>
                )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentProjects;
