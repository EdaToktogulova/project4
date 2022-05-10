import React, {useState} from "react";
import {FaIceCream, FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const handleNav = () => setNav(!nav)

   return (
      <div className="navbar">
      <div className="container">
         <div><FaIceCream size={40} style={{marginleft: '4px'}} /></div>
         <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li>Home</li>
            <li>Order</li>
            <li>Menu</li>
            <li>Delivery</li>
            <li>Contact</li>
         </ul>
      <div className="IceCream" onClick={handleNav}>
         {nav ? (<FaTimes size={20} style={{color: '#ffffff'}} />) : (<FaBars size={20} />)}
      </div>
      </div>
   </div>
   );
}

export default Navbar;