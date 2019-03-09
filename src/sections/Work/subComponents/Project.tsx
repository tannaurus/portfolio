import React from "react";
import "./ProjectStyles.css";
import "../WorkStyles.css";

interface Description { jobTitle: string, description: string; talkingPoints: Array<React.ReactNode>; };
interface ProjectProps { name: string; description: Description; imageSrc: string; projectClass: string; };

// TO-DO: Refactor into stateless function once MVP is established, if need be.
class Project extends React.Component<ProjectProps> {
  render() {
    const { name, description, imageSrc, projectClass } = this.props;
    return (
      <section className={`flex flex-center flex-align-center project ${projectClass}`}>
        <section className="flex flex-row flex-center flex-align-center project-container">
          <img className="project-image" src={imageSrc}/>
          <div className="flex flex-center project-about">
            <p className="project-name">{name}</p>
            <p className="project-description">{description.description}</p>
            <p className="project-job-title">{description.jobTitle}</p>
            {description.talkingPoints}
          </div>
        </section>
      </section>
    );
  };
};

export default Project;