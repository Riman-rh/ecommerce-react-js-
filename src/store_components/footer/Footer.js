import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div  className='footer_container'>
        <div className='footer'>
            <div className='footer_mobile'>
            <div className='footer_nav'>
                <h5>Online Shopping</h5>
                <ul>
                    <a href='#' className='footer_nav_item'><li>New Arival</li></a>
                    <a href='#' className='footer_nav_item'><li>Men Sneakers</li></a>
                    <a href='#' className='footer_nav_item'><li>Women Sneakers</li></a>
                    <a href='#' className='footer_nav_item'><li>Kids Sneakers</li></a>
                    <a href='#' className='footer_nav_item'><li>Socks</li></a>
                </ul>
            </div>
            <div className='footer_nav'>
                <h5>
                Customer Policies
                </h5>
                <ul>
                    <a href='#' className='footer_nav_item'><li>Contact Us</li></a>
                    <a href='#' className='footer_nav_item'><li>FAQ</li></a>
                    <a href='#' className='footer_nav_item'><li>Terms of Use</li></a>
                    <a href='#' className='footer_nav_item'><li>Shipping</li></a>
                    <a href='#' className='footer_nav_item'><li>Privacy Polici</li></a>
                </ul>
            </div>
            </div>
            <div className='footer_mobile'>
            <div className='footer_nav'>
                <h5>
                Contact Us
                </h5>
                <ul>
                    <a href='#' className='footer_nav_item'><li>billysneakers@gmail.com</li></a>
                    <a href='#' className='footer_nav_item'><li>+213546756489</li></a>
                    <a href='#' className='footer_nav_item'><li>Beb Ezzouar, Alger</li></a>
                    <a href='#' className='footer_nav_item'><li>Shipping</li></a>
                    <a href='#' className='footer_nav_item'><li>Privacy Polici</li></a>
                </ul>
            </div>
            <div className='footer_nav'>
                <h5>
                Useful Links
                </h5>
                <ul>
                    <a href='#' className='footer_nav_item'><li>Blog</li></a>
                    <a href='#' className='footer_nav_item'><li>Site Map</li></a>
                    <a href='#' className='footer_nav_item'><li></li></a>
                    <a href='#' className='footer_nav_title'><li>Be Social</li></a>
                    <div className='footer_social_media'>
                        <a href="#"><TwitterIcon/></a>
                        <a href='#'><FacebookIcon/></a>
                        <a href='#'><LinkedInIcon/></a>
                    </div>
                    
                </ul>
            </div>
            </div>
          
            </div> 
            <div className='footer_rights'>
            All rights reserved © 2022 - Billy Sneakers
            </div>          
    </div>
  )
}

export default Footer