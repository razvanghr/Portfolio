import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function HorizontalNavigation() {
  return (
    <div className="horizontal-navigation">
      <div className="horizontal-links">
        <a
          href="https://www.linkedin.com/in/razvan-ghilea-6b201a267/"
          target="_blank"
        >
          <AiFillLinkedin className="nav-hover" />
        </a>
        <a href="https://github.com/razvanghr" target="_blank">
          <AiFillGithub className="nav-hover" />
        </a>
      </div>
      <a
        href="https://github.com/razvanghr/resume/blob/main/CV-Ghilea%20Razvan%20Alin.pdf"
        target="_blank"
      >
        <button>Resume</button>
      </a>
    </div>
  );
}

export default HorizontalNavigation;
