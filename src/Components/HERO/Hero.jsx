import React from "react";
import Image from "../HERO/DSC_3104.jpg";
import "../HERO/Hero.css";
import Video from "./techvideo.mp4";

const color = {
  color: "yellow",
};

const Hero = () => {
  return (
    <>
      <video autoPlay loop muted className="video">
        <source src={Video} />
      </video>
      <div className="Hero">
        <div className="ImageDiv">
          <img className="Profile-Picture" src={Image} alt="Avatar" />
        </div>
        <p className="Intro">Hi, my name is</p>
        <h2>OLUWATIMILEHIN</h2>
        <h2 className="Others">
          SAMSON <span style={color}>ESAN</span>
        </h2>
        <p className="Intro-Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          earum at recusandae veniam, obcaecati voluptatibus! Error quos
          molestias, dolor est perspiciatis et impedit reiciendis. Veniam non
          odit illo quidem corrupti ipsum sapiente animi velit! Minus dolore nam
          esse quasi iste, molestias ratione voluptatibus explicabo impedit
          sequi optio! Libero, nemo incidunt!
        </p>
      </div>
    </>
  );
};

export default Hero;
