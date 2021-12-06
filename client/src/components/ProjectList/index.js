import React, { useEffect } from 'react';
import { UPDATE_PROJECTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

  const ProjectList = ({ projects }) => {
    console.log(projects)
    if (!projects.length) {
      return <h3>No Projects Yet</h3>;
    }

  return (
    <div className="card">
      <h2>Your projects:</h2>
      {projects && 
        projects.map((project) => (
          <div key={project._id}>
            <h3>Lets See if this works?!?</h3>
            <ul> 
              <li>
              {project.name}
              </li>
              <li>
                {project.description}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default ProjectList;
