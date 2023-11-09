import React from "react";

import ProjectCard from "./ProjectCard";

// Project Data
import { projectData } from "../data/projectData";

function ProjectsComponent() {
  return (
    <div className="main-projects" id="projects">
      <h1 style={{ marginBottom: "20px" }} className="section-title">
        Projects <span>.</span>
      </h1>
      <div className="projects">
        {projectData.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsComponent;
