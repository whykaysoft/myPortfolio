import React from 'react'
import '../components/Navbar.css'
import { Link } from 'react-scroll'
import img1 from '../components/images/img1.jpeg'

const Navbar = () => {
  return (
    <nav>
       <div className="navbar">
       <div className="logo">
            Whykaysoft
        </div>
        <div className="nav-link">
            <ul>
                <Link to='projects' smooth={true} spy={true}>
                <li>Projects</li>
                </Link>
                <Link to='services' smooth={true} spy={true}>
                <li>Services</li>
                </Link>
                <Link to='contact' smooth={true} spy={true}>
                <li>Contact</li>
                </Link>
            </ul>
            <div className="img-link">
                <img src={img1} alt="" />
            </div>
        </div>
       </div>
    </nav>
  )
}

export default Navbar