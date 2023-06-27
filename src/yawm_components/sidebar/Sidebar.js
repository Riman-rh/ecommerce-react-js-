import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar_wrapper'>
        <div className='sidebar_header'>
        <select className='sidebar_lang'>
            <option value='en'>🇬🇧&emsp;English</option>
            <option value='fr'>🇫🇷&emsp;français</option>
            <option value='ar'>🇩🇿&emsp;عربي</option>             
        </select>
        </div>
        <ul className='sidebar_nav'>
            <a className='sidebar_link' href='#'><li>Home</li></a>
            <a className='sidebar_link' href='#'><li>Services</li></a>
            <a className='sidebar_link' href='#'><li>Get Started</li></a>
            <a className='sidebar_link' href='#'><li>FAQ</li></a>
            <a className='sidebar_link' href='#'><li>Contact</li></a>
        </ul>

    </div> 
  )
}

export default Sidebar