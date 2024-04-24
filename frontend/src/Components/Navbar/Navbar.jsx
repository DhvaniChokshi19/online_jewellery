import React, { useState } from "react"
import { useContext } from 'react';
import {useRef} from 'react'; 
import "./Navbar.css"
import logo from "../Assests/ring.png"
import cart_icon from "../Assests/cart_icon.png"
import {Link} from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext.jsx'
import nav_dropdown from '../Assests/dropdown_icon.png'

const Navbar = () =>{
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className = "navbar">
            <div className = "navbar-logo">
                <img alt="logo" src={logo}></img>
                <p>Gemstone Guild</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle}src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === "shop"? <hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("earrings")}}><Link style={{textDecoration:'none'}}to='/earrings'>Earrings</Link> {menu === "earrings"? <hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("rings")}}><Link style={{textDecoration:'none'}}to='/rings'>Rings</Link>{menu === "rings"? <hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("necklace")}}><Link style={{textDecoration:'none'}} to='/necklace'>Necklace</Link>{menu === "necklace"? <hr></hr>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>}
                
                <Link style={{textDecoration:'none'}}to='/cart'><img alt = "cartlogo" src={cart_icon}></img></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;