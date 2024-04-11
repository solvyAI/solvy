import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import PhoneBanner from "../Assets/Untitled design(5).png"
import { IoMdDownload } from "react-icons/io";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className = "home-banner-container">
        <div className = "home-bannerImage-container">
         
        </div>
        <div className = "home-text-section">
          <h1 className = "primary-heading">
           Supercharge your Learning
          </h1> 
          <p className = "primary-text">
            Solve anything with Solvy AI
          </p>

          <button className = "secondary-button">
            Download on the App Store <IoMdDownload />
          </button>
        </div>
        <div className="home-image-container">
        <img src={PhoneBanner} alt = ""/>
        </div>
      </div>
    </div>
  )
}

export default Home
