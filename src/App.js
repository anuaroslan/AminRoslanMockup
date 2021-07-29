import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

// Images
import Mya from "./images/myastudio.png";
import Logo from "./images/ARlogo.png";
import Tukang from "./images/tukangdev.png";
import Discord from "./images/discord.png";
import Kountr from "./images/kountr.jpg";
import discordTalk from "./images/discordTalk.jpg";
import learn from "./images/learn.png";
import server from "./images/server.jpg";

// Animations
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <div id="projects" className="project-container">
        <div className="title">
          <Fade left>
            <h3>PROJECTS 💻</h3>
            <div className="underline-h3"></div>
          </Fade>
        </div>
        <div className="grid-container">
          <Fade bottom duration={1000}>
            <Feature
              title="Mya Studio"
              content="MYA Studio is a creative agency hailing from Manila, Philippines. The site was built on Wordpress. I only did a bit of touchup and detailing."
              year="2020"
              appType="Web"
              image={Mya}
            />
          </Fade>
          <Fade bottom duration={1300}>
            <Feature
              title="AMIN ROSLAN'S PORTFOLIO"
              content="Built my portfolio using Gatsby, deployed to Netlify. I think this is the 4th iteration 😨"
              year="2020"
              appType="Web"
              image={Logo}
            />
          </Fade>
          <Fade bottom duration={1600}>
            <Feature
              title="TUKANG.DEV"
              content="Tukang.dev is home to a group of freelancers that are specialised in their own respective field. We offer solutions to problems. We help businesses by delivering quality products & services until the end.
            "
              year="2019"
              appType="Web"
              image={Tukang}
            />
          </Fade>
          <Fade bottom duration={1900}>
            <Feature
              title="DISCORD COGNITO OPENID WRAPPER"
              content="This project is a forked. A small shim that allows AWS Cognito to talk to discord (by providing an OpenID wrapper around the Discord API). Initially it's to only work with Github, but I made some modifications to make it work with Discord API.
            "
              year="2019"
              appType="Auth"
              image={Discord}
            />
          </Fade>
          <Fade bottom duration={2200}>
            <Feature
              title="KOUNTR"
              content="Kountr is a counter app that is made easy to use for everyone. Even if you are as young as a baby, or old as a cassette, you can use it!
            "
              year="2019"
              appType="App"
              image={Kountr}
            />
          </Fade>
        </div>
      </div>
      <div id="speaking" className="project-container">
        <div className="title">
          <Fade left>
            <h3>PROJECTS 💻</h3>
            <div className="underline-h3"></div>
          </Fade>
        </div>
        <div className="grid-container">
          <Fade bottom duration={1000}>
            <Feature
              title="PORTING MY DISCORD BOT PROJECT INTO AWS ECOSYSTEM"
              content="AWS Usergroup meetup October 2019"
              year="2019"
              appType="AWS, TECH"
              image={discordTalk}
            />
          </Fade>
          <Fade bottom duration={1500}>
            <Feature
              title="WHY YOU SHOULD LEARN TO CODE?"
              content="Next Academy Live Q&A Webinar"
              year="2019"
              appType="TECH"
              image={learn}
            />
          </Fade>
          <Fade bottom duration={2000}>
            <Feature
              title="JS Wednesday - KualaLumpurJS"
              content="AWS Usergroup meetup October 2019"
              year="2019"
              appType="TECH"
              image={server}
            />
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
