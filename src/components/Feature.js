import React from "react";
import ".././App.css";

function Feature({ title, content, year, appType, image }) {
  return (
    <div className="grid-item">
      <div className="grid-content">
        <h4>{title}</h4>
        <div className="underline"></div>
        <div className="p-container">
          <p className="project-text">{content}</p>
        </div>
      </div>
      <div className="grid-content2">
        <div className="year">
          <h5>{year}</h5>
        </div>
        <div className="grid-icons">
          <i style={{ margin: "0 5px" }} className="fab fa-github"></i>
          <i style={{ margin: "0 5px" }} className="fas fa-globe-asia"></i>
        </div>
        <div className="project-img-div">
          <img className="project-img" src={image} alt=""></img>
        </div>
        <div className="app-type">
          <h5 style={{ color: "white" }}>{appType}</h5>
        </div>
      </div>
    </div>
  );
}

export default Feature;
