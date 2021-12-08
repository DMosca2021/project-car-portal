// import { idbPromise } from "../../utils/helpers";
import Auth from "../../utils/auth";


const ProjectList = ({ projects }) => {
  console.log(projects);
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  } else if (!Auth.loggedIn()) {
    return <h3>Please Log In</h3>
  }

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <section className="section" key={project._id} id="project-card">
            <h3>Lets See if this works?!?</h3>
            <ul>
              <li>{project.name}</li>
              {/* <li>{project.description}</li> */}
            </ul>

            {/* <div className="card-image">
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
            <time datetime="2016-1-1">{project.projectDate}</time> */}
          </section>
        ))}
    </div>
  );
};

export default ProjectList;
