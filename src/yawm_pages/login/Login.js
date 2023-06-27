import React,{useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link} from 'react-router-dom';
import { setCredentials } from '../../features/auth/authSlice';
import { useLoginMutation, useUserMutation } from '../../features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import {axiosRequest} from '../../axios';
const Login = ({showLogin, setShowLogin}) => {
  const userRef = useRef()
  const errRef = useRef()
  const dispatch = useDispatch()
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()
  const [login, {isLoading}] = useLoginMutation()
  const [loadUser] = useUserMutation()
  const [formData,setFormData] = useState({
    'username':'',
    'password':''
  })
  const {username, password} = formData
  const onChange = e =>{setFormData({...formData, [e.target.name]:e.target.value})}
 

  useEffect(()=>{
    setErrMsg('')
  },[username,password])
  const onSubmit = async e => {
    e.preventDefault()
    try{
        const credentails = await login({username,password}).unwrap()
        dispatch(setCredentials(credentails))
        const userdata = await loadUser()
        const user = userdata.data
        console.log(user)
        dispatch(setCredentials({...credentails,"user":user.username}))
        setFormData({username:'', password:''})
        setShowLogin(false)
        axiosRequest().get("/store/storeCheck/").then((res)=>{
          const store = res.data.name
          navigate(`/${store}/admin`)

       }).catch((err)=>{ navigate('/createstore')})
    } catch(err){
      if(!err?.response){
        setErrMsg('No Server Response')
      } else if(err.response?.status === 400){
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status ===401){
        setErrMsg('Unauthorized')
      } else{
        setErrMsg('Login Failed')
      }

    }

  }
  return (
    <div className='login_wrapper' >
        <div className='login_close' onClick={()=>setShowLogin(!showLogin)}>

        </div>
        <form className='login_form' onSubmit={e=>onSubmit(e)} >
        <CloseIcon onClick={()=>setShowLogin(!showLogin)}/>
        <img src='assets/svg/logo.svg'/>
        <h2>Welcome to Yawm Store!</h2>
        <p>{errMsg}</p>
        <div className='login_input'>
          <label>Username</label>
          <input type='text' name='username' value={username} placeholder='Username' onChange={e=>onChange(e)}/>
        </div>
        <div className='login_input'>
          <label>Password</label>
          <input type='password' name='password' value={password} placeholder='Password' onChange={e=>onChange(e)}/>
          <Link to='/' className='login_forget_password'>Forgot Password?</Link>
        </div>
        <button type='submit' className='login_btn'> Login </button>
        <div> OR </div>
        <button className='login_fb'> <img src='assets/svg/facebook_logo.svg'/> Continue with Facebook</button>
        <button className='login_google'> <img src='assets/svg/google_logo.svg'/> Continue with Google</button>
     
        <div className='login_singup'>
           Already have an account? | <Link className='login_link_signup' to='/'>Signup</Link>
        </div>
        </form>
        
    </div>
  )
}


export default Login