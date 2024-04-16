import React from 'react'
import './Offers.css'
import arrow_icon from "../Assests/arrow.png"
import exclusive_image from '../Assests/exclusive_image.jpg'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
           <h1>Elegance Unveiled:</h1>
           <h2>embrace your inner beauty</h2> 
           <button>Check Now  
              <img src={arrow_icon} alt=""></img>
           </button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt=""></img>
        </div>
    </div>
  )
}
