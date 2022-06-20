import React from "react";
import SELF from "../among_us.png";
import "./Header.css";
import { Link } from "react-scroll";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Header = () => {
  return (
    <header>
      <div className="container headerContent">
        <h5 className="greet">Greetings, I Am</h5>
        <h1 className="myName">Eric Mai</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <br />
        <div className="self">
          <img src={SELF} alt="me" />
        </div>
        <button className="scroll">
          <Link to="about" smooth={true}>
            <ArrowDownwardIcon></ArrowDownwardIcon>
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
