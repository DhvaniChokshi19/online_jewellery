import React from 'react'
import './Footer.css'
import logo from "../Assests/ring.png"
import insta from '../Assests/instagram_icon.png'
import whatsapp from '../Assests/whatsapp_icon.png'
import map from '../Assests/googlemaps.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt=""></img>
            <p>Gemstone Guild</p>
        </div>
        <ul className='footer-links'>
            <li>Products</li>
            <li>Shipping & Returns </li>
            <li>Terms and Conditions</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div className='footer-social-icons'>
            <div className="footer-icons-container">
                <img src={insta} alt="inst"></img>
            </div>
            <div className="footer-icons-container">
                <img src={map} alt="loca"></img>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="whatsapp"></img>
            </div>
        </div>
        <div className="footer-copyright">
            <hr></hr>
            <p>Copyright @2023- All rights reserved</p>
        </div>
    </div>
  )
}
