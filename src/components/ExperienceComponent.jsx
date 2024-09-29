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
            <h1>Creatopy</h1>
            <p>June 2024 - Present</p>
          </div>
          <div className="exp-t1">
            <h1 style={{ color: "#0af698" }}>Software Engineer</h1>
            <p>Oradea</p>
          </div>
          <p>
            I'm working on the Creatopy app, focusing especially on the growth
            area and experimenting with pricing strategies. This experience
            gives me the opportunity to explore new approaches and contribute to
            product development!
          </p>
          <div className="exp-skill">
            <p>React</p>
            <p>GraphQL</p>
            <p>TypeScript</p>
            <p>PostgreSQL</p>
            <p>Redis</p>
          </div>
        </div>
        <div className="exp">
          <div className="exp-t1">
            <h1>Creatopy</h1>
            <p>March 2024 - June 2024</p>
          </div>
          <div className="exp-t1">
            <h1 style={{ color: "#0af698" }}>Software Engineer Intern</h1>
            <p>Oradea</p>
          </div>
          <p>
            During this internship, I had the opportunity to work on a real
            project with a wonderful team, which motivated me to develop my
            skills and contribute innovative ideas. It was a really valuable
            experience!
          </p>
          <div className="exp-skill">
            <p>React</p>
            <p>GraphQL</p>
            <p>TypeScript</p>
            <p>PostgreSQL</p>
            <p>Redis</p>
          </div>
        </div>
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
