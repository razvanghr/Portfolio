import img1 from "../assets/p1.png";
import TypeWriter from "./TypeWriter";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { Link } from "react-scroll";

function Main() {
  // Scroll Option

  return (
    <div className="main">
      <div className="main-content">
        <h1>{<TypeWriter />} Razvan Ghilea</h1>
        <p>Web Developer</p>
        <div className="social-logo">
          <AiFillGithub
            onClick={() => {
              window.location.href = "https://github.com/razvanghr";
            }}
          />
          <AiFillLinkedin
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/razvan-ghilea-6b201a267/";
            }}
          />
        </div>
        <button
          className="resume-btn"
          onClick={() => {
            window.location.href =
              "https://github.com/razvanghr/resume/blob/main/CV-Ghilea%20Razvan%20Alin.pdf";
          }}
        >
          Resume
        </button>
      </div>
      <Link to="about-me" spy={true} smooth={true} offset={50} duration={500}>
        {<BsFillArrowDownCircleFill className="drop-down-icon" />}
      </Link>
    </div>
  );
}

export default Main;
