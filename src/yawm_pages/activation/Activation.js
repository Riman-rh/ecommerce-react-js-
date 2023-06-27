import React from 'react'
import './Activation.css'
import {axiosRequest} from '../../axios'
import {useParams, useNavigate} from 'react-router-dom'

const Activation = () => {
  const {uid,token} = useParams()
  const navigate = useNavigate()
  const onClick=()=>{
    axiosRequest().post("auth/users/activation/",{uid,token}).then(
      (res)=>{
        alert('your account was successfully created')
        navigate('/login')

      }
    )
  }
  return (
    <div className='activation_wrapper'>
      <div className='activation'>
        <img src='/assets/svg/logo.svg'/>
        <h2>Welcome to Yawm Store!</h2>
        <p>Click the button below to activate your acount here</p>
        <button className='activation_btn' onClick={()=>onClick()}>Activate</button>
      </div>
   
    </div>
  )
}

export default Activation