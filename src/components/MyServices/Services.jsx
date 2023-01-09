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
            <p>Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit. Cumque reiciendis, numquam ullam dicta quasi architecto minus ex aliquam culpa, 
               animi at asperiores nam repellendus autem sunt praesentium debitis nesciunt facere.
            </p>
        </div>
        <div className='container1'>
        <div className="top">
                <div className="number">
                    <p>2</p>
                </div>
                <span>Backend Developer</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit. Cumque reiciendis, numquam ullam dicta quasi architecto minus ex aliquam culpa, 
               animi at asperiores nam repellendus autem sunt praesentium debitis nesciunt facere.
            </p>
        </div>
        <div className='container1'>
        <div className="top">
                <div className="number">
                    <p>3</p>
                </div>
                <span>Data Analyst</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit. Cumque reiciendis, numquam ullam dicta quasi architecto minus ex aliquam culpa, 
               animi at asperiores nam repellendus autem sunt praesentium debitis nesciunt facere.
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