import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="image-box">
        <img src={project.image} alt="Watch-Vault" />
      </div>
      <div className="project-title">
        <h1>{project.title}</h1>

        <div className="project-links">
          <a href={project.gitHub} target="_blank">
            <AiFillGithub />
          </a>
          <a href={project.live} target="_blank">
            <AiOutlineLink />
          </a>
        </div>
      </div>
      <div className="project-description">
        <h1>{project.usage}</h1>
        <p>{project.info}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
