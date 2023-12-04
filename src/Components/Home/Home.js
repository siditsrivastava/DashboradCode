import React from "react";
import "./Home.css";
import Navbar from '../Navbar/Navbar'
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="home-section">
        <div>
          <h2 className="header">WELCOME</h2>
        </div>

        <div className="button-category">
           <NavLink to="/solution"> <button className="btn">Solution</button></NavLink> 
            <button className="btn">Portfolio</button>
            <button className="btn">Linkedin</button>
        </div>
      </div>
    </>
  );
};

export default Home;
