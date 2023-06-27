import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './TopProduct.css'
import { topProduct } from '../../data'
const TopProduct = () => {
  return (
    <div className='topProduct_wrapper'>
        <h3>Top Products</h3>
        <div className='topProduct'>
          {
            topProduct.map((item,index)=>(
              <ProductCard id={item.id} title={item.title} price={item.price} url={item.url}/>
            ))
          }
            
           
        </div>

    </div>
  )
}

export default TopProduct