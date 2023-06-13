import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>
          <span>&lt;/&gt;</span> Razvan Ghilea
        </h1>
      </div>
      <div className="nav-right">
        <Link to="about-me" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link>
        <a href="https://github.com/razvanghr/resume/blob/main/CV-Ghilea%20Razvan%20Alin.pdf">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
