import React from "react";

function ExperienceComponent() {
  return (
    <div className="main-experience" id="experience">
      <h1 style={{ marginBottom: "20px" }} className="section-title">
        Experience <span>.</span>
      </h1>
      <div className="experiences">
        <div className="exp">
          <div className="exp-t1">
            <h1>OSF Digital</h1>
            <p>Jun 2023 - Jul 2023</p>
          </div>
          <div className="exp-t1">
            <h1 style={{ color: "#0af698" }}>Frontend Development Intern</h1>
            <p>Remote</p>
          </div>
          <p>
            During this front-end internship, I put into practice the knowledge
            gained by developing a real project, strengthening my skills in this
            field.
          </p>
          <div className="exp-skill">
            <p>React</p>
            <p>SCSS</p>
            <p>NodeJS</p>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
