import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="titleStart" className="scroll3">
        <Button variant="contained" style={{ backgroundColor: "#523A28" }}>
          Top
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
