import React from 'react'
import './HomeHeader.css'
const HomeHeader = () => {
  return (
    <div className='homeHeader'>
        <div className='home_img'>
        </div>
        
        <div className='homeHeader_search'>
            <div className='search_container'>
                <input className='search_input' tytpe='search' placeholder='Search a topic'/>
                <button className='search_btn'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader