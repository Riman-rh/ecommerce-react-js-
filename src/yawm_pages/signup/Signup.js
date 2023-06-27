import React,{useState, useEffect, useRef} from 'react'
import {  useNavigate } from 'react-router-dom';
import './Signup.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link} from 'react-router-dom';
import {axiosRequest} from '../../axios';

const Signup = () => {
    const [formData, setFormData]= useState({
        username:'',
        email:'',
        password:'',
    })
    const navigate = useNavigate()
    const [errMsg, setErrMsg] = useState('')
    const {username, email, password} = formData
    const onChange =e=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    useEffect(()=>{
      setErrMsg('')
    },[username,password,email])
    const onSubmit =async e=>{
        e.preventDefault()
        try{
          const response = await axiosRequest().post("/auth/users/",
          {
              email: formData.email,
              username: formData.username,
              password:formData.password,
          }).then((res)=>{
              alert('we sent you an email to activate you accout')
              navigate('/')

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
        <div className='signup_wrapper' >
      
        <form className='signup_form' onSubmit={e=>onSubmit(e)} >
       
        <img src='assets/svg/logo.svg'/>
        <h2>Signup to Yawm Store!</h2>
        {
          errMsg?(<p>{errMsg}</p>):null
        }
        
        <div className='signup_input'>
          <label>Username</label>
          <input type='text' name='username' value={username} placeholder='Username' onChange={e=>onChange(e)}/>
        </div>
        <div className='signup_input'>
          <label>email</label>
          <input type='text' name='email' value={email} placeholder='email' onChange={e=>onChange(e)}/>
        </div>
        <div className='signup_input'>
          <label>Password</label>
          <input type='password' name='password' value={password} placeholder='Password' onChange={e=>onChange(e)}/>
        </div>
       
        <button type='submit' className='signup_btn'> signup </button>
        <div> OR </div>
        <button className='signup_fb'> <img src='assets/svg/facebook_logo.svg'/> Signup with Facebook</button>
        <button className='signup_google'> <img src='assets/svg/google_logo.svg'/> Signup with Google</button>
     
        <div className='signup_singup'>
           Already have an account? | <Link className='signup_link_signup' to='/login'>Login</Link>
        </div>
        </form>
        
    </div>

  )
}

export default Signup