import React from 'react'
import alhaji from '../images/alhaji.jpeg'
import '../About/AboutPage.css'

const AboutPage = () => {
  return (
    <div className='about'>
        <div className="container">
        <h1>About Me</h1>
        <div className='aboutpage'>
            <div className='right-img'>
                <img src={alhaji} alt="" />
            </div>
            <div className='text'>
                <p>
                    Hi!, I am Abdulyakeen, I  curate experiences using frontend and backend technologies. I enjoy running analysis using Statistical tools. 
                </p> <br />
                <p>
                    My interest in web development started back in 2019 when I tried to give my mom's business an online presence. 
                    She had no money to hire a developer so I made research on how to build amazing websites and boom I was curious to know more, 
                    hence what instigated The Obsession.
                </p> <br />
                <p>I enjoy turning complex problems into simple, beautiful and intuitive web designs, I consider myself a well-organized, problem solving person with very high attention to details</p>
                <br /><br />
                <p>
                    When I'm not eye balls deep in codes, you'll find me reading, playing video games or most likely watching movies. 
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutPage