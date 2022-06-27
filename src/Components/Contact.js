import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contacts">
      <div className="iconButtonStyle">
        <IconButton
          style={{
            fontSize: 50,
            backgroundColor: "#5763ac",
            marginRight: "1rem",
          }}
        >
          <FaLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/eric-mai-57274b228/")
            }
          ></FaLinkedin>
        </IconButton>
        <IconButton style={{ fontSize: 50, backgroundColor: "#5763ac" }}>
          <FaGithub
            onClick={() =>
              window.open("https://github.com/emai2443?tab=repositories")
            }
          ></FaGithub>
        </IconButton>
        <h2 className="timing">Email: ericmai10314@gmail.com</h2>
        <h5 className="timing2">
          <ul>Monday - Friday: 10am - 11pm</ul>

          <ul>Saturday - Sunday: 11am - 9pm</ul>
        </h5>
      </div>
    </div>
  );
};
export default Contact;
