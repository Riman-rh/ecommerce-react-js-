import React, {useState, useEffect} from 'react'
import './Createproduct.css'
import { axiosRequest } from '../../../../axios'
import {useParams} from 'react-router-dom'
import Createcategory from '../createcategory/Createcategory'
const Createproduct = () => {
  const[categories, setCategories]= useState([])
  const {store} = useParams()
  const [productData,setProductData]= useState({
    category:'',
    name_ar:'',
    name_en:'',
    name_fr:'',
    quantity:'',
    price:''
  })
  const{category, name_ar, name_fr, name_en, quantity, price} = productData
  const baseURL = `http://${store}.localhost:8000/store`
  const onChange =(e)=>{
    setProductData({...productData, [e.target.name]:e.target.value})

  }
  useEffect(()=>{

    axiosRequest(baseURL).get(('/categoryList/')).then((res)=>{
           setCategories(res.data) 
    })
  },[])
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(productData)
    axiosRequest(baseURL).post(('/productCreate/'),productData)

    
  }

  return (
    <div className='createproduct_wrapper'>

    {
      categories.length>0?(
        <form className='createproduct_form' onSubmit={(e)=>onSubmit(e)}>
          <h3>Create Product</h3>
        <div className='createproduct_input'>
        <label>Category</label>
        <select name='category' value={category} onChange={e=>onChange(e)} >
        <option >Choose Category</option>
          {
            categories.map((item, index)=>(<option value={item.id} >{item.name_en}</option>))
          }
        </select>
      </div>
      <div className='createproduct_input'> 
        <label>Name_ar</label>
        <input type='text' name='name_ar' value={name_ar} onChange={(e)=>onChange(e)} placeholder='Name_ar'/>
      </div>
      <div className='createproduct_input'>
        <label>Name_en</label>
        <input type='text' name='name_en' value={name_en} onChange={(e)=>onChange(e)} placeholder='Name_en'/>
      </div>
      <div className='createproduct_input'>
        <label>Name_fr</label>
        <input type='text' name='name_fr' value={name_fr} onChange={(e)=>onChange(e)} placeholder='Name_fr'/>
      </div>  
      <div className='createproduct_input'>
        <label>Price</label>
        <input type='text' name='price' value={price} onChange={(e)=>onChange(e)} placeholder='Price'/>
      </div> 
      <div className='createproduct_input'>
        <label>Quantity</label>
        <input type='text' name='quantity' value={quantity} onChange={(e)=>onChange(e)} placeholder='Quantity'/>
      </div>
      <button type='submit'>Submit</button>
        </form>

      ):(
        <Createcategory/>

      )
    }
     

    </div>
  )
}

export default Createproduct