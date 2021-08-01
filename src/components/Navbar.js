import React, { useState, useEffect } from "react";
import ".././App.css";
import logo from "../images/ARlogo.png";
import { Link } from "react-scroll";
import HideOnScroll from "./HideOnScroll";
// import Fade from "react-reveal/Fade";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 240);
    });
  }, []);
  return (
    <HideOnScroll>
      <header className={scroll ? "header-scrolled" : "top-header"}>
        <div className="nav-header">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            <img className="ar-logo" src={logo} alt=""></img>
          </Link>
          <button className="nav-toggle"></button>
        </div>
        <ul className="links">
          <li>
            <Link to="about" spy={true} smooth={true} offset={-80}>
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-200}>
              <button>Projects</button>
            </Link>
          </li>
          <li>
            <Link to="speaking" spy={true} smooth={true} offset={-300}>
              <button>Speaking</button>
            </Link>
          </li>
        </ul>
      </header>
    </HideOnScroll>
  );
};

export default Navbar;
