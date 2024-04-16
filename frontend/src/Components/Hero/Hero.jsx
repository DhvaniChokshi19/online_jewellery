import React from 'react'
import './Hero.css'
import arrow_icon from "../Assests/arrow.png"
import hero_img from "../Assests/hero_image1.jpg"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>The spirit of timeless luxury</h2>
            
            <div>
                <div className="hero-hand-icon">
                    <h2>New Arrivals!</h2>
                </div>
                <p>Collections
                  for everyone</p>
            </div>
            <div className="hero-latest-btn">
              <div>
                Latest Collection
              </div>
              <img src={arrow_icon} alt=""></img>
            </div>
        </div>
        <div className="hero-right">
          <img src={hero_img} alt=""></img>
        </div>
    </div>
  )

}

export default Hero
