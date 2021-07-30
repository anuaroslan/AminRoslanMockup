import React from "react";
import ".././App.css";
import { CgMouse } from "react-icons/cg";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";
import { render } from "@testing-library/react";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import styled, { css } from "styled-components";

function Home() {
  const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 70px;
    text-align: center;
  `;
  const CarouselUI = ({ children }) => <Container>{children}</Container>;
  const Carousel = makeCarousel(CarouselUI);

  render();

  return (
    <div>
      <nav>
        <section id="home" className="home">
          <div className="home-container">
            <h1>Hello, I'm Amin's Brother!</h1>

            <Carousel defaultWait={4000}>
              <Fade up>
                <h2>Hardcore Musician 🎸</h2>
              </Fade>
              <Fade up>
                <h2>Junior Web Developer 💻</h2>
              </Fade>
            </Carousel>

            <div className="home-icons">
              <i style={{ fontSize: "45px" }} className="fab fa-github"></i>
              <i style={{ fontSize: "49px" }} className="fas fa-envelope"></i>
              <i style={{ fontSize: "48px" }} className="fab fa-instagram"></i>
              <i
                style={{ fontSize: "48px" }}
                className="fab fa-linkedin-in"
              ></i>
            </div>
          </div>
        </section>
      </nav>
      <span className="mouse">
        <i>
          <Link to="about" spy={true} smooth={true} offset={-80}>
            <Jump forever={0} count={3} delay={2000}>
              <CgMouse className="mouse" fontSize="60px" color="grey" />
            </Jump>
          </Link>
        </i>
      </span>
    </div>
  );
}

export default Home;
