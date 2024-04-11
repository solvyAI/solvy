import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import {BsFillCircleFill, BsFillPlayCircleFill} from "react-icons/bs"
import vidImage from "../Assets/Untitled design(9).png"
const VidSum = () => {
  return (
    <div className = "about-section-container">
      
      <div className = "about-section-image-container">
      <img src={vidImage} alt = ""/>
      </div>
      <div className = "about-section-text-container">
        
        <h1 className="primary-heading">

        Video Summarizer
        </h1>
        <p className = "primary-text">
            Solvy can summarize full YouTube videos with just a URL! 
        </p>
    
       
      </div>
    </div>
  )
}

export default VidSum
