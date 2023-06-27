import React from 'react'
import StoreCard from '../../store_components/storeCard/StoreCard'
import Footer from '../../store_components/footer/Footer'
import ProductCard from '../../store_components/productCard/ProductCard'
import { topProduct } from '../../data'

import './Store.css'
const Store = () => {
  return (
    <div className='store_page'>
      <div className='store_content'>
        <StoreCard/>
        <div className='store_products'>
          <h3>
          You may also like
          </h3>
          <div className='related_products'>
            {
              topProduct.map((item,index)=>(
                <ProductCard id={item.id} title={item.title} url={item.url} price={item.price} />
              ))
            }
         
          </div>
          
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Store