import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-section">
        <div className="navbar-title">
          <h1>SS</h1>
        </div>
        <div className="navbar-category">
          <ul>
            <li><NavLink to="/"><button className=" home-btn btn">Home</button></NavLink></li>
            <li><NavLink to="/solution"><button className="btn">Solution</button></NavLink></li>
            <li><button className="btn">Portfolio</button></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
