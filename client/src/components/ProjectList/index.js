import React, { useEffect } from 'react';
// import projectItem from '../projectItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PROJECTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProjectList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_PROJECTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PROJECTS,
        projects: data.projects,
      });
      data.projects.forEach((project) => {
        idbPromise('projects', 'put', project);
      });
    } else if (!loading) {
      idbPromise('projects', 'get').then((projects) => {
        dispatch({
          type: UPDATE_PROJECTS,
          projects: projects,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <div className="my-2">
      <h2>Your projects:</h2>
      {state.projects.length ? (
        <div className="flex-row">
          {filterprojects().map((project) => (
            <projectItem
              key={project._id}
              _id={project._id}
              image={project.image}
              name={project.name}
              price={project.price}
              quantity={project.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any projects yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProjectList;
