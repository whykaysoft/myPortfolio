import React from 'react'
import '../MyServices/Services.css'
import html from '../images/html.png'
import css from '../images/css.png'
import java from '../images/js.png'
import node from '../images/node-js-1174925.png'
import react from '../images/React-icon.png'
import excel from '../images/excel.png'
import Rlogo from '../images/Rlogo.png'

const Services = () => {
  return (
    
<div className='services'>
    <h1>My Services</h1>
    <div className='main-container'>
        <div className='container1'>
            <div className="top">
                <div className="number">
                    <p>1</p>
                </div>
                <span>Frontend Developer</span>
            </div>
            <p>
               I build components that interact with users, aiming at meeting user requirements and delivering a positive user experience.
            </p>
        </div>
        <div className='container1'>
        <div className="top">
                <div className="number">
                    <p>2</p>
                </div>
                <span>Backend Developer</span>
            </div>
            <p>
                I work on the Server side, that recieves requests from the clients, and contains the logic to send the appropriate data block to the client.
            </p>
        </div>
        <div className='container1'>
        <div className="top">
                <div className="number">
                    <p>3</p>
                </div>
                <span>Data Analyst</span>
            </div>
            <p>
                I review data to identify key insights into a business's customers and ways the data can be used to solve problems.
            </p>
        </div>
    </div>
    <div className="skills">
        <div className="html">
            <img src={html} alt="html5"/>
            <span>Html 5</span>
        </div>
        <div className="css">
            <img src={css} alt="css"/>
            <span>CSS</span>
        </div>
        <div className="Javascript">
            <img src={java} alt="java"/>
            <span>Javascript</span>
        </div>
        <div className="Node">
            <img src={node} alt="node"/>
            <span>Node.js</span>
        </div>
        <div className="React">
            <img src={react} alt="react"/>
            <span>React</span>
        </div>
        <div className="excel">
            <img src={excel} alt="excel"/>
            <span>excel</span>
        </div>
        <div className="rlogo">
            <img src={Rlogo} alt="rlogo"/>
            <span>R</span>
        </div>
    </div>
</div> 
)
}

export default Services