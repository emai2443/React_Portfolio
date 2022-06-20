import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaReact } from "react-icons/fa";
import "./AboutMe.css";

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
      <br />
      <br />
      <h2>
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
    </div>
    /* Add Linkdin Profile and etc and scrolls up and down*/
  );
};

export default AboutMe;
