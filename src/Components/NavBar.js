import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="content">
        <Link to="titleStart" className="innerContent">
          Home
        </Link>
        <Link to="about" className="innerContent">
          About Me
        </Link>
        <Link to="projects" className="innerContent">
          Projects
        </Link>
        <Link to="contacts" className="innerContent">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
