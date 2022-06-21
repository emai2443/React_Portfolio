import React from "react";
import "./Projects.css";
import MVB from "../MovieBuddy.png";
import GRID from "../grid.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-scroll";
import WhiteSpace from "./WhiteSpace";

const Projects = () => {
  return (
    <div id="projects">
      <div id="project1">
        <h5 className="titleName">Projects</h5>
        <div className="pjTitle">MOVIE BUDDY</div>
        <img className="pjImage" src={MVB} alt="moviebuddy" />
        <h2 className="pjDes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur
          cursus massa, a tempor enim fringilla sed. Integer turpis orci,
          accumsan sed auctor sit amet, venenatis vel tellus. Nam mollis porta
          metus nec iaculis. Aliquam metus arcu, aliquam quis massa commodo,
          accumsan dapibus quam. Praesent vitae nibh ut urna egestas ultrices.
          Mauris quis fermentum nulla, non fringilla justo. Proin dui nibh,
          placerat vel risus a, scelerisque eleifend lorem. Praesent non maximus
          lacus. Aliquam ornare augue dui, id egestas urna auctor tempor.
          Phasellus vestibulum congue velit non placerat. Maecenas venenatis vel
          libero sit amet sagittis. Duis efficitur odio sit amet nisi tincidunt
          porta. Donec mollis vulputate elit eget cursus. Donec id commodo ex.
          Integer sit amet arcu eu elit facilisis tempus nec eget nibh.
        </h2>
        <button className="pjLink">
          <a href="https://movie-buddy-zeta.vercel.app/">Link</a>
        </button>
        <div>
          <Link to="project2" className="scroll3">
            <ArrowDownwardIcon style={{ fontSize: 50 }}></ArrowDownwardIcon>
          </Link>
          <Link to="about" className="scroll3">
            <ArrowUpwardIcon style={{ fontSize: 50 }}></ArrowUpwardIcon>
          </Link>
        </div>
        <WhiteSpace />
      </div>
      <div id="project2">
        <div className="pjTitle">Grid Maker</div>
        <img className="pjImage" src={GRID} alt="grid maker" />
        <h2 className="pjDes">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur
          cursus massa, a tempor enim fringilla sed. Integer turpis orci,
          accumsan sed auctor sit amet, venenatis vel tellus. Nam mollis porta
          metus nec iaculis. Aliquam metus arcu, aliquam quis massa commodo,
          accumsan dapibus quam. Praesent vitae nibh ut urna egestas ultrices.
          Mauris quis fermentum nulla, non fringilla justo. Proin dui nibh,
          placerat vel risus a, scelerisque eleifend lorem. Praesent non maximus
          lacus. Aliquam ornare augue dui, id egestas urna auctor tempor.
          Phasellus vestibulum congue velit non placerat. Maecenas venenatis vel
          libero sit amet sagittis. Duis efficitur odio sit amet nisi tincidunt
          porta. Donec mollis vulputate elit eget cursus. Donec id commodo ex.
          Integer sit amet arcu eu elit facilisis tempus nec eget nibh.
        </h2>
        <button className="pjLink">
          <a href="https://emai2443.github.io/GridMaker/">Link</a>
        </button>
        <div>
          <Link to="project3" className="scroll3">
            <ArrowDownwardIcon style={{ fontSize: 50 }}></ArrowDownwardIcon>
          </Link>
          <Link to="project1" className="scroll3">
            <ArrowUpwardIcon style={{ fontSize: 50 }}></ArrowUpwardIcon>
          </Link>
        </div>
      </div>
      <WhiteSpace />
    </div>
  );
};
export default Projects;
