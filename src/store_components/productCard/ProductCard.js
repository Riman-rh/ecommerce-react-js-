import React from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
const ProductCard = ({id,title,price,url}) => {
  return (
    <Link to={`/store/${id}`}>
     <div className='productCard_wrapper'>
        <div className='productCard_img'>
            <img src={url}/>
        </div>
        <div className='productCard_inf'>
            <p>
              {title}
            </p>
            <p>
              {price} DZA
            </p>
        </div>
    </div>
    </Link>
   
  )
}

export default ProductCard