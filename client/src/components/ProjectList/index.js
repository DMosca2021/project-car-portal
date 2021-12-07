import { idbPromise } from "../../utils/helpers";

const ProjectList = ({ projects }) => {
  console.log(projects);
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div className="card" key={project._id}>
            <h3>Lets See if this works?!?</h3>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={project.image} alt="Car-pic"></img>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{project.name}</p>
                  <p className="subtitle is-6">{project.vehicle}</p>
                </div>
              </div>
              <div className="content">{project.description}</div>
            </div>
            <ul>
              <li>{project.budget}</li>
              <li>{project.timeSpent}</li>
            </ul>
            <time datetime="2016-1-1">{project.projectDate}</time>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
