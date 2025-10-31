import React from 'react'
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="sub-navbar">
        <img className='logo' src = {logo}/>
        <h2 className='logo-name'>Diwali Vibe's</h2>
        </div>
        <div className="menu-bar">
        <a className='menu' href="/">Home</a>
        <a className='menu' href="/About">About</a>
        <a className='menu' href="/Contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar