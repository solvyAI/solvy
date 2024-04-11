import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import {BsFillCircleFill, BsFillPlayCircleFill} from "react-icons/bs"
import essayImage from "../Assets/Write exceptional Essays(1).png"

const EssayWriter = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <h1 className="primary-heading">Write ExceptionaL Essays</h1>
        <p className="primary-text">
          With a prompt and a word count, Solvy can generate full, exceptional essays with up to 1200 words. 
        </p>
      </div>
      <div className="about-section-image-container">
        <img src={essayImage} alt="" />
      </div>
    </div>
  );
}

export default EssayWriter; 
