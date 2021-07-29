import React from "react";
import ".././App.css";
import aboutPic from "../images/aminhandsome.jpeg";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="title">
        <Fade left>
          <h3>About my Brother 🙋‍♂️ </h3>
        </Fade>
        <div className="underline-h3"></div>
        <Fade bottom>
          <div className="content">
            <p>
              Hello 👋 I'm Amin, a software engineer from KL, Malaysia 🇲🇾. I do
              freelance work as a developer under Tukang Dev.
            </p>
            <p>
              I am specialised Full Stack Development. I code in Typescript &
              Flutter. I prefer deploying on a Docker container than running
              barenaked on a VPS. I can create static sites to fully featured
              web-apps (mobile too). I automate unit & integration testing with
              Jest and E2E testing with Cypress. I have developed applications
              with Cloud Platforms like AWS & GCP, also a big fan of Firebase. I
              am also a fan of using a CMS for my project, ranging from
              Wordpress all the way to Netlify CMS.
            </p>
            <p>
              I game alot. I used to stream regularly on Twitch in 2018. I only
              managed to become an Affiliate on Twitch. I am not streaming games
              anymore as I don't see myself being comfortable turning the thing
              I love to do into a career. However, I still do stream sometimes
              nowadays, not as scheduled as before. I used to stream as long as
              12 hours! That being said, I still game alot, offline. I have a
              Discord server. That's where I usually hangout.
            </p>
            <p>
              I do enjoy drinking coffee at a cafe. I'm no connoiseur, but it's
              a great way for me to hangout with friends, get some work done and
              have meetings.
            </p>
          </div>
        </Fade>
      </div>
      <Fade right>
        <div className="about-pic-container">
          <img className="amin-handsome" src={aboutPic} alt=""></img>
        </div>
      </Fade>
    </div>
  );
}

export default About;
