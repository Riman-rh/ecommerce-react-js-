import React from 'react'
import './Services.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Services = () => {
  return (
    <div className='services_wrapper'>
        <div className='services_header'>
            <h1>Yawm Store Features</h1>
        </div>
        <div className='services'>
            <div className='service_card'>
                <div className='service_content'>
                    <img className='service_img' src="/assets/svg/search_product.svg"/>
                    <p className='service_p'>Search Products</p>
                </div>
            
            </div>
            <div className='service_card'>
                <div className='service_content'>
                    <img className='service_img'  src="/assets/svg/reviews_product.svg"/>
                    <p className='service_p'>Product Reviews</p>
                </div>
           
            </div>
            <div className='service_card'>
                <div className='service_content'>
                    <img className='service_img'  src="/assets/svg/sales_analytics.svg"/>
                    <p className='service_p'>Sales Analytics</p> 
                </div>
          
            </div>
            <div className='service_card'>
                <div className='service_content'>
                    <img className='service_img'  src="/assets/svg/search_product.svg"/>
                    <p className='service_p'>Costumized Checkout</p>
                </div>
            
            </div>
        </div>
        <div className='services_button'>
            <button className='services_btn'>See All Features <ArrowForwardIcon/> </button>
        </div>
    </div>
  )
}

export default Services