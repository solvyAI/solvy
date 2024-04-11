import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import {BsFillCircleFill, BsFillPlayCircleFill} from "react-icons/bs"
import pdfImage from "../Assets/Untitled design(8).png"
const ChatPDF = () => {
  return (
    <div className = "about-section-container">
      
      <div className = "about-section-image-container">
      <img src={pdfImage} alt = ""/>
      </div>
      <div className = "about-section-text-container">
        
        <h1 className="primary-heading">

        Chat with PDF
        </h1>
        <p className = "primary-text">
            Simply attach a PDF document to summarize and ask AI questions pertaining to it, enhancing your work efficiency. 
        </p>
    
       
      </div>
    </div>
  )
}

export default ChatPDF
