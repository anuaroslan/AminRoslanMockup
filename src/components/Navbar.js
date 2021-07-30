import React, { useState, useEffect } from "react";
import ".././App.css";
import logo from "../images/ARlogo.png";
import { Link } from "react-scroll";
import HideOnScroll from "./HideOnScroll";

Function Navbar {
  
  render() {
    return (
      <HideOnScroll>
        <header>
          {" "}
          <div className="nav-header">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              <img className="ar-logo" src={logo} alt=""></img>
            </Link>
            <button className="nav-toggle"></button>
          </div>
          <ul className="links">
            <li>
              <Link to="about" spy={true} smooth={true}>
                <a href="">About</a>
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={-100}>
                <a href="">Projects</a>
              </Link>
            </li>
            <li>
              <Link to="speaking" spy={true} smooth={true} offset={-200}>
                <a href="">Speaking</a>
              </Link>
            </li>
          </ul>
        </header>
      </HideOnScroll>
    );
  }
}
export default Navbar;

//   return (
//     <HideOnScroll>
//       <header className={`Nav ${this.state.nav && 'Nav__black'}`}> >
//         <div className="nav-header">
//           <Link activeClass="active" to="home" spy={true} smooth={true}>
//             <img className="ar-logo" src={logo} alt=""></img>
//           </Link>
//           <button className="nav-toggle"></button>
//         </div>
//         <ul className="links">
//           <li>
//             <Link to="about" spy={true} smooth={true}>
//               <a href="">About</a>
//             </Link>
//           </li>
//           <li>
//             <Link to="projects" spy={true} smooth={true} offset={-100}>
//               <a href="">Projects</a>
//             </Link>
//           </li>
//           <li>
//             <Link to="speaking" spy={true} smooth={true} offset={-200}>
//               <a href="">Speaking</a>
//             </Link>
//           </li>
//         </ul>
//       </header>
//     </HideOnScroll>
//   );
// };

// export default Navbar;
