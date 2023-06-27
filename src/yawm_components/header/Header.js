import React,{useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectCurrentToken, logOut } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
export const Header = ({setShowLogin}) => {
    const dispatch = useDispatch()
    const[showmenu,setShowmenu]=useState(false)
    const token = useSelector(selectCurrentToken)
    const handleLogOut =()=>{
        console.log('this is logout')
        dispatch(logOut())
    }
  return (
    <div className='yawm_header'>
 
        <div className='yawm_header_logo'>
            <Link to='/'><img src='/assets/svg/yawm_logo.svg'/></Link>
            <div className='menu_icon'>
            {   showmenu?
                (<CloseIcon onClick={()=>setShowmenu(!showmenu)} />):
                (<MenuIcon onClick={()=>setShowmenu(!showmenu)} />)

            }
        </div>
        </div>
                <ul className= {showmenu?'yawm_header_nav':'yawm_header_hide'}>
                <a className='yawm_nav_link' href='#'><li>Home</li></a>
                <a className='yawm_nav_link' href='#'><li>Services</li></a>
                <a className='yawm_nav_link' href='#'><li>FAQ</li></a>
                <a className='yawm_nav_link' href='#'><li>Contact</li></a>
                <Link to='/login' className='yawm_nav_link nav_login' ><li>Login</li></Link>
            </ul>
      
    
      
        <select className='yawm_header_lang'>
            <option value='en'>🇬🇧&emsp;English</option>
            <option value='fr'>🇫🇷&emsp;français</option>
            <option value='ar'>🇩🇿&emsp;عربي</option>             
        </select>

  
        <div className='yawm_header_right'>
            {
              token?(
                <>
                <div onClick={()=> handleLogOut()} className='yawm_header_login'>Logout</div>
                <Link to='/getstarted'><button className='yawm_header_login_btn'>Start Now</button></Link> 
                </>
                
              

                ):
                (
                    <>
                    <div onClick={()=> setShowLogin(true)} className='yawm_header_login'>Login</div>
                    <Link to='/signup'><button className='yawm_header_login_btn'>Start Now</button></Link>
                </>
                )
            }
     
          
      
          
        </div>

    </div>
  )
}
