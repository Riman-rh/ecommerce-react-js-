import React,{useState} from 'react'
import './Createstore.css'
import {axiosRequest} from '../../axios';
import { useNavigate } from 'react-router-dom';

const Createstore = () => {
  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    name:'',
    email:''
  })
  const[errMsg,setErrMsg] = useState('')
  const {name,email} = formData
  const onChange =(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value })
  }
  const onSubmit =(e)=>{
      e.preventDefault()
      try{
        axiosRequest().post("/store/storeCreate/",
         
        {
            email: formData.email,
            name: formData.name,
        }).then((res)=>{
            alert('store created susseccefuly')
            navigate('/dashboard')

        })
      
      }catch(err){
        if(!err?.response){
          setErrMsg('No Server Response')
        } else if(err.response?.status === 400){
          setErrMsg(' Username or Email Already exist')
        } else if (err.response?.status ===401){
          setErrMsg('Unauthorized')
        } else{
          setErrMsg('Signup Failed')
        }
      }

  }
  return (
    <div className='createstore_wrapper'>
      <form className='createstore' onSubmit={(e)=>onSubmit(e)}>
       <img src='assets/svg/logo.svg'/>
        <h2>Create Your Own Store!</h2>
        <div className='createstore_input'>
        <label>Name</label>
        <input type='text' placeholder='name' name='name' value={name} onChange={(e)=>onChange(e)}/>
        </div>
        <div className='createstore_input'>
        <label>Email</label>
        <input type='text' placeholder='email' name='email' value={email} onChange={(e)=>onChange(e)}/>
        </div>
        <button type='submit' className='next_btn'>create </button>
      </form>
    </div>
  )
}

export default Createstore