import React, { useState,useEffect } from 'react'
import './Categories.css'
import CategoryCard from './CategoryCard'
import {category} from '../../data'
const Categories = () => {
  
  return (
    <div className='categories_container'>
        <div className='categories_header'>
            <h1>Categories</h1>
        </div>
        <div className='categories'>
          {
            category.map((item,index)=>(
              <CategoryCard id={item.id} title={item.title} image={item.img}/>
            ))
          }

        </div>
        

    </div>
  )
}

export default Categories