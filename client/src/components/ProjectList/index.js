// import { idbPromise } from "../../utils/helpers";
import { pathToArray } from "graphql/jsutils/Path";
import Auth from "../../utils/auth";

const ProjectList = ({ projects }) => {
  console.log(projects);
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  } else if (!Auth.loggedIn()) {
    return <h3>Please Log In</h3>;
  }

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <section
            className="hero columns is-multiline is-mobile section is-medium"
            key={project._id}
            id="project-card"
          >
            <div className="card">
              <header className="card-header">
                <p className="card-header-title is-centered"><span id="name-text">{project.name}</span></p>
              </header>

              <div className="column is-4 is-offset-4">
                <div className="card-image ">
                  {/* <figure className="image is-4by3">
                  <img src={project.image} alt="Car-pic"></img>
                </figure> */}
                  <figure className="image">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    ></img>
                  </figure>
                </div>
              </div>
              <div className="column is-full">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title has-text-left" id="card-title">
                        Started on: <span id="date-text">{project.projectDate}</span> 
                      </p>
                      <p className="subtitle has-text-left" id="card-budget">
                        Total Budget: <span id="date-text">{project.budget}</span> 
                      </p>
                      <p className="subtitle has-text-left" id="card-time">
                        Time Spent in hours: <span id="date-text">{project.timeSpent}</span>
                      </p>
                    </div>
                  </div>
                  <div className="content has-text-left" id="card-description">
                    Description: <span id="date-text">{project.description}</span>
                  </div>
                  <div className="content has-text-left" id="card-vehicle">
                    Vehicle: <span id="date-text">{project.vehicle}</span>
                  </div>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item">
                    Add Vehicle
                  </a>
                  <a href="#" className="card-footer-item">
                    Edit Project
                  </a>
                  <a href="#" className="card-footer-item">
                    Delete Project
                  </a>
                </footer>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
};

export default ProjectList;
