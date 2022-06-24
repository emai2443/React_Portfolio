import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contacts">
      <div className="iconButtonStyle">
        <IconButton style={{ fontSize: 50, backgroundColor: "#A47551" }}>
          <FaLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/eric-mai-57274b228/")
            }
          ></FaLinkedin>
        </IconButton>
        <IconButton style={{ fontSize: 50, backgroundColor: "#A47551" }}>
          <FaGithub
            onClick={() =>
              window.open("https://github.com/emai2443?tab=repositories")
            }
          ></FaGithub>
        </IconButton>
        <h2 className="timing">Email: ericmai10314@gmail.com</h2>
        <h5>
          <ul>Monday: 10am - 11pm</ul>
          <ul>Tuesday: 10am - 11pm</ul>
          <ul>Wednesday: 10am - 11pm</ul>
          <ul>Thrusday: 10am - 11pm</ul>
          <ul>Friday: 10am - 11pm</ul>
          <ul>Saturday: 11am - 9pm</ul>
          <ul>Sunday: 11am - 9pm</ul>
        </h5>
      </div>
    </div>
  );
};
export default Contact;
