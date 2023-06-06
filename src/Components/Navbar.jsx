import React from "react";
import "./Navbar.css";


function Navbar () {
    return(
        <div className="navbar-container">
            <div className="navbar-left">
                <h2>logo</h2>
            </div>
            <div className="navbar-right">
                <div className="navbar-right-menu">
                 <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                 </ul>
                </div>
                <div className="navbar-right-social">
                    <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="/"><i class="fa-brands fa-twitter"></i></a>
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;