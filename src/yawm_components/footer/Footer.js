import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='yawm_footer_container'>
            <div className='yawm_footer'>
            <div className='yawm_footer_item'>
                <h4>Yawm <span>Store</span></h4>
                <p>
                Millions of people are searching for Products on the Internet. Lorem ipsum dolor sit amet, consectetur.<br/>
                Grow up your business and creat your online store on Yawm Store today.
                </p>
            </div>
            <div className='yawm_footer_nav'>
                <h5>
                    Company
                </h5>
                <ul>
                    <a href='#' className='yawm_footer_nav_item'><li>Home</li></a>
                    <a href='#' className='yawm_footer_nav_item'><li>Features</li></a>
                    <a href='#' className='yawm_footer_nav_item'><li>FAQ</li></a>
                    <a href='#' className='yawm_footer_nav_item'><li>Contact</li></a>
                </ul>
            </div>
         
            <div className='yawm_footer_item'>
                <h5>Subscribe our Network</h5>
                    <p>
                    Join our mailing list to get notified about new job opportunities.
                     Simply enter your email.
                    </p>
                    <div className='yawm_footer_subscribe'>
                        <input type='email' placeholder='Your email'/>
                        <button className='yawm_subscribe_btn'>Subscribe</button>
                   
                    </div>
            </div> 
            </div> 
            <div className='yawm_footer_rights'>
                All rights reserved © 2022 - Yawm Store • Team Made with ❤️
            </div>          
    </div>
  )
}

export default Footer