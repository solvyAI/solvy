import React from 'react'
import Logo from "../Assets/solvylogo.png"
import { FaInstagram } from "react-icons/fa"
const Footer = () => {
    
  return (
    <div className = "footer-wrapper">
      <div className="footer-section-one">
       <div className = "footer-logo-container">
            <img src = {Logo} alt = "" />
       </div>
       
    </div>
    <div className = "footer-section-two">
   
    <div className = "footer-section-columns">
    <span>Support</span>
    <span class="underline">solvyai.app@gmail.com</span>
     
    <a href="https://www.dropbox.com/scl/fi/9kec46moqy7d1mb7hqck3/Solvy-AI-Policy-Terms.pdf?rlkey=frbp7yvqofgh4nscxrqc296ji&dl=0">
    <span>Privacy Policy + Terms and Conditions</span>
</a>

        <div className="footer-icons">
    <a href="https://www.instagram.com/solvy.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <FaInstagram />
    </a>
</div>

    </div>
   
    </div>
    </div>
  )
}

export default Footer
