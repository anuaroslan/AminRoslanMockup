import React from 'react';
import ".././App.css";
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <footer>
          <div className="footer-container">
              <Fade left><p className="footer-p" >© 2021 — Redesigned & redeveloped by Anuar Roslan ❤️</p></Fade>
          </div>
          <Fade right>
           <div  className="footer-icon">
            <i style={{color: 'white'}} className="fab fa-github"></i>
            <i style={{color: 'white'}} className="fas fa-envelope"></i>
            <i style={{color: 'white'}} className="fab fa-instagram"></i>
            <i style={{color: 'white'}} className="fab fa-linkedin-in"></i>
           </div>
           </Fade>
        </footer>
    );


}

// style="font-family: sans-serif; color: white; font-weight:300 ;" Footer container
// icons style="color:rgb(255, 255, 255);"

export default Footer;