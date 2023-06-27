import React from 'react'
import './Cart.css'
import Footer from '../../store_components/footer/Footer'
import CartCard from '../../store_components/cartCard/CartCard'
import {selectcart} from '../../features/cart/cartSlice'
import { useSelector } from 'react-redux'
import { Shield } from '@mui/icons-material'
import Shipping from '../../store_components/shipping/Shipping'


const Cart = () => {
    const mycart = useSelector(selectcart)
  return (
    <>
    {
        mycart.length ==0?(
          
            window.location.replace('/'),
            alert('you besket is empty')
           
          
          
        ):(
            <div className='cartPage_wrapper'>
            <div className='cartPage'>
                <div className='cartPage_left'>
                    <div className='cartPage_left_header' >
                        <h2 className='cartPage_h2' >Cart</h2>
                    </div>
                    <div className='cartPage_cards'>
                        {
                            mycart.map((item,index)=>(<CartCard id={item.id} 
                                quantity={item.quantity} size={item.size} />))
                        }
                    </div>
                    <div className='cartPage_left_footer' >
                    <h2 className='cartPage_h2'>TOTAL</h2>
                    <h2 className='cartPage_h2'>45 000.00 DZD</h2>
                    </div>
    
                </div>
                <div className='cartPage_right'>
                    <Shipping/>
                </div>
    
            </div>
            <Footer/>
        </div>
        )
    }
   </>
  )
}

export default Cart