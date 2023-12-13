// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [showbar, setShowbar] = useState(false);

//   return (
//     <>
//       <nav className="main-nav">
//         <div className="logo">
//           <h2>
//            SS
//           </h2>
//         </div>
//         <div className={showbar ? "menu-link mobile-menu-link" : "menu-link"}>
//           <ul>
//             <li className="">
//               <Link to="/" className="navbar-icon" >Home</Link>
//             </li>
//             <li className="">
//               <Link  className="navbar-icon" to="/solution">Solution</Link>
//             </li>
//             <li>
//               <Link className="navbar-icon" to="https://siditsrivastava.github.io/portfolio/">Portfolio</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="social-media">
//           <div className="hamburger-menu">
//             <button
//               className="btn"
//               href="#"
//               onClick={() => setShowbar(!showbar)}>
//               <i class="fa-solid fa-bars"></i>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const  [showbar , setShowbar] = useState(false)
  return (
    <div className='nav-menu'>
      <div className='logo'>
          <h2>SS</h2>
      </div>

      <div  className={ showbar ? 'mobile-menu-link' : "nav-link"}>
        <ul>
          <li><NavLink to="/" className="option">HOME</NavLink></li>
          <li><NavLink to="/solution" className="option">SOLUTION</NavLink></li>
          <li><NavLink to="" className="option">PORTFOLIO</NavLink></li>
        </ul>
      </div>

      


          <div className="hamburger-menu">
              <button
              className="btn"
              href="#"
              onClick={() => setShowbar(!showbar)}
              ><i class="fa-solid fa-bars"></i>
            </button>
          </div>
    </div>
  )
}

export default Navbar