import { NavLink } from "react-router-dom";
import "./WorkCardStyle.css";
import proj1 from "../assets/intro-br1.jpg"
import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={proj1} alt="image"/>
                <h2>Project Title</h2>
                <div className="project-details">
                    <p>description of project</p>
                    <NavLink to="https://stackoverflow.com/" className="proj-btn">View</NavLink>
                </div>
            </div>

            <div className="project-card">
                <img src={proj1} alt="image"/>
                <h2>Project Title1</h2>
                <div className="project-details">
                    <p>description of project</p>
                    <NavLink to="https://stackoverflow.com/" className="proj-btn">View</NavLink>
                </div>
            </div>

            <div className="project-card">
                <img src={proj1} alt="image"/>
                <h2>Project Title3</h2>
                <div className="project-details">
                    <p>description of project</p>
                    <NavLink to="https://stackoverflow.com/" className="proj-btn">View</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard