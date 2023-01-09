import React from 'react'
import '../Home/HomePage.css'
import img2 from '../images/img2.png'
import {HiOutlineMail} from 'react-icons/hi'

const HomePage = () => {
  return (
    <div className="home">
        <div className="home-container">
            <div className="intro">
                <div className="right">
                    <img src={img2} alt="" />
                </div>
                <div className="left">
                    <p>Hi, i am <span className='soft'>Whykaysoft</span></p>
                    <p>A Full Stack Developer</p>
                    <div className="email">
                            <HiOutlineMail fontSize="40px"/>
                        <a href="mailto:abdulyakeen2018@gmail.com" target="_blank" rel="noopener noreferrer">
                            abdulyakeen2018@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage