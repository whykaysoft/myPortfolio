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
            title: "Web Blog 3",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "http://google.com"
        },
        {
            bgImg: box2,
            title: "Web Blog 3",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box3,
            title: "Web Blog 3",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box4,
            title: "Web Blog 3",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box5,
            title: "Web Blog 3",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            link: "gffgfgfgfgfgfg"
        },
        {
            bgImg: box6,
            title: "Web Blog 3",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
                            <a href="hghghg">
                                <div className="overlays"></div>
                                <img className='image' src={project.bgImg} alt="img" />
                                <div className="card-details">
                                    <h1>Web 3 Blog</h1>
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