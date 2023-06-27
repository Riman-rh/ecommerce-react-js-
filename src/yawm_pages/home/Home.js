import React from 'react'
import './Home.css'
import Services from '../services/Services';
import Faq from '../faq/Faq';
import Contact from '../contact/Contact';
import Footer from '../../yawm_components/footer/Footer';
import HomeHeader from '../homeHeader/HomeHeader';

const Home = () => {
  return (
    <>   
     <div className='yawmhome_wrapper'>
      <HomeHeader/>
    <Services/>
    <Faq/>
    <Contact/>
   
    </div>
    <Footer/>
    </>

  )
}

export default Home