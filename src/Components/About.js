import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import {BsFillCircleFill, BsFillPlayCircleFill} from "react-icons/bs"
import chatbotImage from "../Assets/aichatbot(1).png"
const About = () => {
  return (
    <div className = "about-section-container">
      
      <div className = "about-section-image-container">
      <img src={chatbotImage} alt = ""/>
      </div>
      <div className = "about-section-text-container">
        
        <h1 className="primary-heading">

        AI Chatbot
        </h1>
        <p className = "primary-text">
            The most powerful chatbot to tackle any task and solve any question, delivering easy and instant responses.  
        </p>
    
       
      </div>
    </div>
  )
}

export default About
