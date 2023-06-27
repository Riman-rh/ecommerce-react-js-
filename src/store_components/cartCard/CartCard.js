import React from 'react'
import './CartCard.css'
import {selectcart} from '../../features/cart/cartSlice'
import { useSelector } from 'react-redux'
import { topProduct } from '../../data'
import CloseIcon from '@mui/icons-material/Close';
import {  useDispatch } from 'react-redux'
import { deleteCart } from '../../features/cart/cartSlice'

const CartCard = ({id, size, quantity}) => {
    let mycart = useSelector(selectcart)
    const myarray = topProduct.filter(content => content.id == id)
    const dispatch = useDispatch()
    const handleClick =()=>{
        dispatch(deleteCart(id))
    }
  return (
    <div className='cartCard_wrapper'>
        <div className='cartCard_left'>
            <img src={myarray[0].url}/>
        </div>
        <div className='cartCard_right'>
            <div className='cartCard_header'>
                <p className='cartCard_h1'>{myarray[0].title} </p>
                <CloseIcon onClick={()=>handleClick()} />
            </div>
            <div>
                <p className='cartCard_inf'>Color: <span>White</span></p>
            </div>
            <div>
            <p className='cartCard_inf'>size: <span>{size}</span></p>
            </div>
            <div className='cartCard_footer'>
            <div className='cartCard_inf'>quantity:
                <select className='CartCard_select' value={quantity}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> 
                </div>
                <div className='CartCard_price'>
                    {myarray[0].price} DZD
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartCard