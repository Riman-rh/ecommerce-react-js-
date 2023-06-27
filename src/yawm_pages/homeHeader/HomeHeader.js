import React from 'react'
import './HomeHeader.css'
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeHeader = () => {
  return (
    <div className='yawmhome'>
    <div className='yawmhome_left'>
        <h1 className='yawmhome_title'>
            Get your <span className='yawmhome_title_color'>online <br/> 
            store</span> now!
        </h1>
        <p className='yawmhome_desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus posuere elementum mauris, a tincidunt mi posuere at.
        </p>
        <Link to='/signup'>
        <button className='yawmhome_btn' >
            Get Started Now <ArrowForwardIcon/>
        </button>
        </Link>
       
    </div>
    <div className='yawmhome_right'>
        <img src={require('../../assets/images/home_header.jpg')}/>
    </div>

</div>
  )
}

export default HomeHeader
