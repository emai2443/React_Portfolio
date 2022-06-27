import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaReact } from "react-icons/fa";
import "./AboutMe.css";
import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import { FaUser } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="abMeIcon">
        <FaUser className="userIcon" size="3em" />
        <h1 className="abTitle">About Me</h1>
      </div>

      <br />
      <div className="icons">
        <div className="schoolIcon">
          <SchoolIcon style={{ fontSize: 100 }}></SchoolIcon>
          <h2 className="collegeName">Hunter College</h2>
        </div>
        <div className="wrapIcon">
          <div className="codeIcon">
            <CodeIcon style={{ fontSize: 100 }}></CodeIcon>
            <div className="scriptIcon">
              <HtmlIcon style={{ fontSize: 50 }}></HtmlIcon>
            </div>
            <div className="scriptIcon">
              <CssIcon style={{ fontSize: 50 }}></CssIcon>
              <JavascriptIcon style={{ fontSize: 50 }}></JavascriptIcon>
              <FaReact className="faREACT" size="2em" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h2 className="abMeDes">
        Hi I am Eric Mai, a recent Hunter College graduate with a BA in Computer
        Science. I enjoy learning new talents and honing them to the best of my
        ability. I am eager to find a challenging and prosperous job in Web
        Development, for I am a Frontend Developer. I have studied Frontend
        Development for 4+ years and my current Tech Stack is React, JavaScript,
        HTML and CSS.
      </h2>
      <div>
        <Link to="projects" className="scroll2">
          <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
            Next
          </Button>
        </Link>
        <Link to="titleStart" className="scroll2">
          <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
            Prev
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
