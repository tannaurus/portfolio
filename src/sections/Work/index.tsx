import React from "react";
import _ from "lodash";

// Styles
import "./WorkStyles.css";

// Components
import Project from "./subComponents/Project";
import ShapaPress from "./subComponents/ShapaPress";

const PROJECTS = [
  {
    name: "Shapa",
    description: {
      jobTitle: "2017-2019 / Lead Product Engineer",
      description: "A React Native application for those interested in leveling up their weight loss journey.",
      talkingPoints: [<ShapaPress />]
    },
    imageSrc: "/images/shapa.png",
    projectClass: "shapa"
  }
  // TO-DO: Revisit these projects once an MVP is established.
  // {
  //   name: "Lunar Run",
  //   description: {
  //     jobTitle: "Product Engineer",
  //     description: "Building the scale of tomorrow, today.",
  //     talkingPoints: []
  //   },
  //   imageSrc: "/images/shapa.png",
  //   projectClass: ""
  // },
  // {
  //   name: "Shapa",
  //   description: {
  //     jobTitle: "Product Engineer",
  //     description: "Building the scale of tomorrow, today.",
  //     talkingPoints: []
  //   },
  //   imageSrc: "/images/shapa.png",
  //   projectClass: ""
  // }
];

class Work extends React.Component {

  renderProjects = () => PROJECTS.map(project => 
    <Project 
      name={project.name} 
      description={project.description} 
      imageSrc={project.imageSrc} 
      projectClass={project.projectClass} 
    />);

  render() {
    return (
      <article className="flex flex-center flex-align-center work" id="work">
        {this.renderProjects()}
      </article>
    );
  };
};

export default Work;