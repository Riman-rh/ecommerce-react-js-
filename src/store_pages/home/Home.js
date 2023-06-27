import React from 'react'
import Categories from '../../store_components/categories/Categories'
import Footer from '../../store_components/footer/Footer'
import HomeHeader from '../../store_components/homeHeader/HomeHeader'
import TopProduct from '../../store_components/topProduct/TopProduct'
import './Home.css'
const HomeStore = () => {
  return (
    <div className='home'>
      <div className='home_header'>
        <HomeHeader/>
      </div>
      
      <div className='home_content'>
      <Categories/>
      <TopProduct/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomeStore