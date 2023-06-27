import React, {useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectcart} from '../../features/cart/cartSlice'
import { useSelector } from 'react-redux'
const Header = () => {
  const [show, setShow]= useState(false)
  const mycart = useSelector(selectcart)
  const handleEmty=()=>{
    if (mycart.length==0){
      alert('your basket is empty')
    }
    
  }

  return (
    
    <div className='header'>
        <div className='header_left'>
        <Link to='/' className='header_logo'>
          <img className='logo' src='/assets/svg/header_icon.svg'/>
        </Link>
        <div className='menu'>
        <div className='menu_open'>
          {
            !show?
            (
            <MenuIcon onClick={()=>setShow(!show)}/> 
            
            ):
            ( 
              <CloseIcon onClick={()=>setShow(!show)}/>
           
             )
          }
          
        </div>
         
       
        </div>
      
        </div>
        <div className={show?('header_right'):('menu_hide')}>
        <ul className='header_nav'>
            <Link to='/' className='nav_link' onClick={()=>setShow(!show)}>
                <li className='nav_item'>Home</li>
            </Link>
            <Link to='/' className='nav_link' onClick={()=>setShow(!show)} >
                <li className='nav_item'>New</li>
            </Link>
            <Link to='/categories' className='nav_link' onClick={()=>setShow(!show)}>
                <li className='nav_item'>Categories</li>
            </Link>
            <div className='basket_icon' onClick={()=>setShow(!show)}>
                <Link to={mycart.length==0?(window.location):('/cart')} onClick={handleEmty}><LocalMallOutlinedIcon /></Link> 
             <div className='basket_length'>{mycart.length}</div>
             
          </div>
        </ul>
        
        
          
        </div>
    </div>
  )
}

export default Header