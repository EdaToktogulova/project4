import React from "react";
import './Header.css';

const Header = () => {
   return (
      <div className="header">
         <div className="container">
            <div className="content">
               <div className="text">
                  <p>welcome to our</p>
               </div>
               <h1>Ice-Cream</h1>
               <h1>Shop</h1>
               <button className="btn">Delivery</button>
               <button className="btn">Take-out</button>
            </div>
         </div>
      </div>
   );
}

export default Header;