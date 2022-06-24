import React from "react";
import "./Projects.css";
import MVB from "../MovieBuddy.png";
import GRID from "../grid.png";
import ROBO from "../robofriends.png";
import { Link } from "react-scroll";
import WhiteSpace from "./WhiteSpace";
import { Button } from "@mui/material";

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

        <div>
          <Link to="project2" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#523A28" }}>
              Next
            </Button>
          </Link>
          <Link to="about" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#523A28" }}>
              Prev
            </Button>
          </Link>
          <Button
            className="scroll2"
            variant="contained"
            style={{ backgroundColor: "#523A28", marginRight: "1.758%" }}
          >
            <a href="https://movie-buddy-zeta.vercel.app/">Link</a>
          </Button>
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
        <div>
          <Link to="project3" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#523A28" }}>
              Next
            </Button>
          </Link>
          <Link to="project1" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#523A28" }}>
              Prev
            </Button>
          </Link>
          <Button
            className="scroll2"
            variant="contained"
            style={{ backgroundColor: "#523A28", marginRight: "1.758%" }}
          >
            <a href="https://emai2443.github.io/GridMaker/">Link</a>
          </Button>
        </div>
      </div>
      <WhiteSpace />
      <div id="project3">
        <div className="pjTitle">RoboFriends</div>
        <img className="pjImage" src={ROBO} alt="RoboFriends" />
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
        <div>
          <Link to="contacts" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#523A28" }}>
              Next
            </Button>
          </Link>
          <Link to="project2" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#523A28" }}>
              Prev
            </Button>
          </Link>
          <Button
            className="scroll2"
            variant="contained"
            style={{ backgroundColor: "#523A28", marginRight: "1.758%" }}
          >
            <a href="https://emai2443.github.io/robofriends/">Link</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Projects;
