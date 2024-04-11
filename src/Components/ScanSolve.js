import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import {BsFillCircleFill, BsFillPlayCircleFill} from "react-icons/bs"
import scanSolveImage from "../Assets/Scan & Solve.png"

const ScanSolve = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <h1 className="primary-heading">Scan & Solve</h1>
        <p className="primary-text">
          Snap any problem with your camera and gain insights from AI!
        </p>
      </div>
      <div className="about-section-image-container">
        <img src={scanSolveImage} alt="" />
      </div>
    </div>
  );
}

export default ScanSolve;
