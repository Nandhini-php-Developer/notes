import "../About/AboutContentStyle.css";
import { Link } from "react-router-dom";
import React from 'react'
import MyImg1 from "../assets/react-web-development.webp"
import MyImg2 from "../assets/about-img2.jpg"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">

<h1>Who Am I?</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum exercitationem autem asperiores cupiditate.</p>
<Link to="/contact"><button className="btn">Contact Us</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={MyImg2} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={MyImg1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent