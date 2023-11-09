import React from "react";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="main-contact" id="contact">
      <h1 style={{ marginBottom: "20px" }} className="section-title">
        Contact <span>.</span>
      </h1>
      <p>Do not hesitate to contact me</p>
      <p>razvan_alin02@yahoo.com</p>
      <div className="contact-links">
        <a href="https://github.com/razvanghr" target="_blank">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/razvan-ghilea-6b201a267/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="mailto:razvan_alin02@yahoo.com">
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
}

export default Contact;
