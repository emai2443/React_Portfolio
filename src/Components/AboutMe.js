import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaReact } from "react-icons/fa";
import "./AboutMe.css";
import { Link, animateScroll as scroll } from "react-scroll";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@mui/material";

const AboutMe = () => {
  return (
    <div id="about">
      <h1 className="abTitle">About Me</h1>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus,
        diam nec aliquet blandit, libero sapien interdum leo, ut dictum enim
        justo quis purus. Donec porta, orci eget auctor ornare, ligula massa
        dictum est, ac malesuada eros tortor vel orci. Cras eu maximus mauris.
        Sed venenatis ultricies arcu vel maximus. Nam ligula ipsum, ullamcorper
        et velit et, fringilla semper purus. Mauris dapibus, lorem in mollis
        mollis, tortor sem vulputate massa, et pulvinar neque dui vel augue.
        Curabitur varius massa ut arcu tempus vestibulum. Nam eu dui tellus.
        Aliquam id nunc sed nunc bibendum faucibus vel non tortor. Cras maximus
        commodo auctor. Vivamus at condimentum mauris.
      </h2>
      <div className="iconButtonStyle">
        <IconButton style={{ fontSize: 50 }}>
          <FaLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/eric-mai-57274b228/")
            }
          ></FaLinkedin>
        </IconButton>
        <IconButton style={{ fontSize: 50 }}>
          <FaGithub
            onClick={() =>
              window.open("https://github.com/emai2443?tab=repositories")
            }
          ></FaGithub>
        </IconButton>
      </div>
      <div>
        <Link to="projects" className="scroll2">
          <ArrowDownwardIcon style={{ fontSize: 50 }}></ArrowDownwardIcon>
        </Link>
        <Link to="titleStart" className="scroll2">
          <ArrowUpwardIcon style={{ fontSize: 50 }}></ArrowUpwardIcon>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
