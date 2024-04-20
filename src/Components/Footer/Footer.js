import "./FooterStyle.css";
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_container">
            <div className="left-footer">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Munichalai Madurai.</p>
                        <p>Tamil Nadu</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+129743999</h4>
                </div>
                <div className="main"><h4><FaMailBulk size={20} style={{ color: "#fff", marginRight : "2rem"}}/>test@gmail.com</h4></div>
            </div>
            <div className="right-footer">
                <h4>About The Company</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error sit similique ducimus iure dolores vitae temporibus. Laborum illo tempora nam aliquid perspiciatis expedita cumque laboriosam, libero omnis, excepturi tenetur?</p>
                <div className="social-icons">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{ color: "#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{ color:"#fff", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer