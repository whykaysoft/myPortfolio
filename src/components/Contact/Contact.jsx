import React from 'react'
import {RiInstagramFill} from 'react-icons/ri'
import {RiLinkedinFill} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'
import {RiGithubFill} from 'react-icons/ri'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-text">
            <span>LET'S WORK TOGETHER</span>
        </div>
        <p>abdulyakeen2018@gmail.com</p>
        <div className='icons'>
           <div className="insta">
           <a href="http://instagram.com/_whykay.soft_/">
            <RiInstagramFill fontSize='32px'/>
            </a>
           </div>
           <div className="insta">
           <a href="http://linkdin.com/in/abdulyakeen-ogunleye-7389aa247/">
            <RiLinkedinFill fontSize='32px'/>
            </a>
           </div>
           <div className="insta">
           <a href="http://twitter.com/whykaysoft/">
            <RiTwitterFill fontSize='32px'/>
            </a>
           </div>
           <div className="insta">
           <a href="http://github.com/whykaysoft/">
            <RiGithubFill fontSize='32px'/>
            </a>
           </div>
        </div>
        <div className="copyright">
          &copy; WhykaySoft 2023
        </div>
    </div>
  )
}

export default Contact