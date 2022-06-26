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
          Movie Buddy is my capstone project that I worked on in Hunter.
          Simulating an Agile work enviorment, me and my team used React, HTML,
          CSS to create a flexible movie application. The project features a
          Landing page where users can register and/or log-in using their E-mail
          address and password. Once logged in the user will have access to 3
          categories of movies, Popular, Now Playing and Top-Rated. The user can
          navigate to our Filter page, with over 10 filters to find the perfect
          movie. We also included the Developers favorite movies, and a random
          movie genrerator for when the user is undecisive. There is also a
          search feature to look for the exact movie you would like to watch.
          Finally there is the settings page and log out page on the farthest
          right, which give the users freedom to change their data. Each movie
          is interactable with an abundent synopsis and the choice to add a
          movie to their Favorites page.
        </h2>

        <div>
          <Link to="project2" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
              Next
            </Button>
          </Link>
          <Link to="about" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
              Prev
            </Button>
          </Link>
          <Button
            className="scroll2"
            variant="contained"
            style={{ backgroundColor: "#283d9d", marginRight: "1.758%" }}
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
          The Grid Maker project was built using only HTML, CSS and JavaScript.
          The purpose of this project was for me to practice what I have learned
          throughout the few years I have been studying Web Development. The
          project focuses on DOM manipulation in making each button feature
          accessing the HTML elements. Each button is functional through DOM
          manipulation and serves to their purpose without bugs. The Add Row and
          Col will add a grid in the screen respectively. The Remove Row and Col
          will remove a grid respectively. Fill All Uncolored will fill all
          uncolored rows in the screen, while Fill All will fill all the grids
          on the screen. Clear will clear all the grids on the screen and their
          colors. Finally the dropdown option will allow user to select a color
          and on clicking a grid cell, it will change its color to the selected
          color.
        </h2>
        <div>
          <Link to="project3" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
              Next
            </Button>
          </Link>
          <Link to="project1" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
              Prev
            </Button>
          </Link>
          <Button
            className="scroll2"
            variant="contained"
            style={{ backgroundColor: "#283d9d", marginRight: "1.758%" }}
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
          This project was built using React, JavaScript, HTML and CSS. The
          project is created whilst I was learning API calls. The user can make
          a search and while doing so the project will make an API call to
          retireve a unique robot that fits that name. This project also touches
          upon on more CSS styling as well as Class based Functional React.
        </h2>
        <div>
          <Link to="contacts" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
              Next
            </Button>
          </Link>
          <Link to="project2" className="scroll2">
            <Button variant="contained" style={{ backgroundColor: "#283d9d" }}>
              Prev
            </Button>
          </Link>
          <Button
            className="scroll2"
            variant="contained"
            style={{ backgroundColor: "#283d9d", marginRight: "1.758%" }}
          >
            <a href="https://emai2443.github.io/robofriends/">Link</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Projects;
