import React from "react";
import "./Home.css";
import Navbar from '../Navbar/Navbar'
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="home-section">
      
        <div>
          <h2 className="header">WELCOME</h2>
        </div>

        {/* <div className="button-category">
           <NavLink to="/solution"> <button className="btn">Solution</button></NavLink> 
            <NavLink to="https://siditsrivastava.github.io/portfolio/"><button className="btn">Portfolio</button></NavLink>
           <NavLink to="https://www.linkedin.com/in/sidit-srivastava/"> <button className="btn">Linkedin</button></NavLink> 
        </div> */}
      </div>
      <Footer/>
    </>
  );
};

export default Home;
