import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.css'

const CategoryCard = ({id,title,image}) => {
  return (
    <Link to={`/category/${id}`}>
   <div className='categoryCard_wrapper'>
    <div className='categoryCard_flex' >
      <img src={image}/>
    </div>
    </div>
    <div className='categoryCard_title'>
      <div className='div_flex'>

      </div>
      <div>
        <h3 >{title}</h3>
      </div>
      
    </div>
    </Link>
 
    
  )
}

export default CategoryCard 
