import React from "react";

function AboutComponent() {
  return (
    <div className="main-about" id="about">
      <h1 className="section-title">
        About<span>.</span>
      </h1>
      <div className="about-content">
        <div className="about-content-left">
          <p>
            Hello! I am passionate about web development. I love creating
            immersive digital apps that bring value and solve user problems. I
            have a good knowledge of programming languages ​​such as JavaScript
            Java.
          </p>
          <p>
            I have worked with various frameworks and technologies such as
            React, SpringBoot and Node. Thanks for your time!
          </p>
          <p>
            In my free time, I like to learn new things both related to web
            development and other fields. I believe that web development is a
            continuous learning process.
          </p>
          <p>
            I am open to learning and developing my skills, and constructive
            feedback is always welcome.
          </p>
        </div>
        <div className="about-content-right">
          <h1 className="section-title">
            Skills<span>.</span>
          </h1>
          <div className="skills">
            <p>JavaScript</p>
            <p>Java</p>
            <p>React</p>
            <p>NodeJS</p>
            <p>Express</p>
            <p>Spring</p>
            <p>SCSS</p>
            <p>Git</p>
            <p>SQL & NoSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
