import React,{useState, useEffect} from 'react'
import './Createcategory.css'
import {useParams} from 'react-router-dom'
import { axiosRequest } from '../../../../axios'
const Createcategory = () => {
    const {store} = useParams()
    const baseURL = `http://${store}.localhost:8000/store`

    const [categoryData, setCategoryData] = useState({
        name_ar:'',
        name_en:'',
        name_fr:''
    })
    const {name_ar, name_fr, name_en}= categoryData
    const onChange=(e)=>{
            setCategoryData({...categoryData, [e.target.name]:e.target.value})
    }
    const onSubmit= async e =>{
        e.preventDefault()
        console.log('this is submit')
        const response = await axiosRequest(baseURL).post(('/categoryCreate/'),categoryData)
    }

  return (
    <div className='createcategory_wrapper' >
       
        <form className='createcategory_form' onSubmit={(e)=>onSubmit(e)}>
            <h3>Create Category</h3>
            <div className='createcategory_input'>
                <label>Name_ar</label>
                <input type='text' name='name_ar' value={name_ar} onChange={e=>onChange(e)} placeholder='Name arabic' />
            </div>
            <div className='createcategory_input'>
                <label>Name_en</label>
                <input type='text'name='name_en' value={name_en}  onChange={e=>onChange(e)} placeholder='Name english' />
            </div>
            <div className='createcategory_input'>
                <label>Name_fr</label>
                <input type='text' name='name_fr' value={name_fr}  onChange={e=>onChange(e)} placeholder='Name french' />
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Createcategory