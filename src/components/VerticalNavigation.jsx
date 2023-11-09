import React from "react";

function VerticalNavigation() {
  const handleClickScroll = (el) => () => {
    const element = document.getElementById(el);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="vertical-navigation ">
      <p className="horizontal-text">RG</p>
      <p className="nav-hover" onClick={handleClickScroll("about")}>
        About
      </p>
      <p className="nav-hover" onClick={handleClickScroll("projects")}>
        Projects
      </p>
      <p className="nav-hover" onClick={handleClickScroll("experience")}>
        Experience
      </p>
      <p className="nav-hover" onClick={handleClickScroll("contact")}>
        Contact
      </p>
    </div>
  );
}

export default VerticalNavigation;
