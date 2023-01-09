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
                Lorem ipsum dolor sit amet consectetur. Facilisi nunc orci pellentesque semper integer cursus porttitor in. Ut orci risus commodo neque tempus. 
                Molestie cursus in nulla adipiscing enim eu. Sed convallis scelerisque risus nibh nulla. 
                Arcu ac vestibulum pellentesque egestas vitae varius iaculis magnis purus. Mattis egestas tristique fringilla et at. 
                Maecenas a donec nec dictumst condimentum. Faucibus blandit vestibulum nunc in consequat nibh volutpat ornare vitae. 
                Sed dolor sit sit sit augue aenean. Pretium in pulvinar urna imperdiet eu eget a non viverra. Pretium facilisis massa turpis blandit. 
                Eget sollicitudin diam nascetur a cras et. Nibh nunc cras cum duis condimentum nulla. Fermentum integer fermentum nulla mi. 
                Nunc ipsum ornare nibh turpis. Nunc lectus aliquam purus suspendisse molestie enim quis euismod. Lectus ac feugiat ultrices quis pharetra. 
                Scelerisque at pharetra in dui proin felis amet sed. In amet pulvinar tellus ullamcorper. Purus amet odio mattis diam volutpat.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutPage