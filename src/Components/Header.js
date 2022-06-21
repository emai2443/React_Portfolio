import React from "react";
import SELF from "../among_us.png";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Header = () => {
  return (
    <header id="titleStart">
      <div>
        <div className="container headerContent">
          <h5 className="greet">Greetings, I Am</h5>
          <h1 className="myName">Eric Mai</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <br />
          <div className="self">
            <img src={SELF} alt="me" />
          </div>
        </div>
        <div className="scrollButton">
          <Link to="about" smooth={true} className="scroll1" duration={1}>
            <ArrowDownwardIcon style={{ fontSize: 50 }}></ArrowDownwardIcon>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
