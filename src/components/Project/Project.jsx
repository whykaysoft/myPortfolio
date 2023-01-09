import React from 'react'
import '../Project/Project.css'
import {RiArrowRightLine} from 'react-icons/ri'

import box1 from '../images/Box 1.png'
import box2 from '../images/Box 2.png'
import box3 from '../images/Box 3.png'
import box4 from '../images/Box 4.png'
import box5 from '../images/Box 5.png'
import box6 from '../images/Box 6.png'

const Project = () => {
    const ProjectData = [
        {
            bgImg: box1,
            title: "Amazon E-Commerce",
            about: "An eCommerce website that enables users purchase as many items as possible.",
            link: "http://google.com"
        },
        {
            bgImg: box2,
            title: "Blockchain Landing Page",
            about: "An insight of a blockchain page where people trade their assets.",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box3,
            title: "Cocktail DATABASE",
            about: "A web app to help search for the preparation methods of your favourite cocktails. Built with React.JS, CSS3 and thecocktaildbAPI.",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box4,
            title: "FrontEnd Only Interactive Credit Card Generator",
            about: "A single-page credit card generator app using React.JS,useReducer Hook and Context API for state management. The design was from a FrontEndMentor Challenge",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box5,
            title: "TO'S Productivity",
            about: "A productivity app that helps users keep track of their daily tasks. It's fitted with authentication and authorization for easy access anywhere and anytime",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box6,
            title: "Iconator",
            about: "A web app that allow users generate favicons of different sizes, formats and respective HTML code for easy implementation.",
            link: "gffgfgfgfgfgfg"
        },
    ]
  return (
    <div>
        <div className="projects">
            <h1>My Projects</h1>
        <div className="cards">
            {ProjectData.map((project, key) => {
                return (
                    <div className='card'>
                        <div className="card-img">
                            <a href="home">
                                <div className="overlays"></div>
                                <img className='image' src={project.bgImg} alt="img" />
                                <div className="card-details">
                                    <h1>Web 3 Blog</h1>
                                    <span>{project.title}</span> <br /><br />
                                    <span>{project.about}</span>
                                    <div className="live">
                                        <a href={project.link}>
                                            <span>Live Preview</span>
                                            <RiArrowRightLine fontSize='26px'/>
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
            <div className="view">
                <a href="http://github.com/whykaysoft/" target="_blank" rel="noopener noreferrer">
                    View More
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project