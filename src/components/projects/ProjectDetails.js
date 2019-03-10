import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorum placeat harum non officiis quibusdam fugiat ipsam doloremque
            possimus optio, numquam ea adipisci officia suscipit, commodi id
            eius quaerat quasi.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Yashasvi Jain</div>
            <div>10th March,10pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
