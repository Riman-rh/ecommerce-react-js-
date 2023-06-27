import React,{useState,useEffect} from 'react'
import './StoreCard.css'
import {useParams} from 'react-router-dom'
import { topProduct } from '../../data'
import {  useDispatch } from 'react-redux'
import {selectcart} from '../../features/cart/cartSlice'
import { addCart } from '../../features/cart/cartSlice'
import { useSelector } from 'react-redux'

const StoreCard = () => {

    const{id} = useParams()

    useEffect(()=>{
        setItem({id:id, size:'', quantity:1})
      },[id])

    const myarray = topProduct.filter(content => content.id == id)
    const[item,setItem]= useState({
        id:'',
        size:'',
        quantity:1
    })
    const dispatch = useDispatch()
      const handleClick=()=>{
        if(item.size == ''){
            alert('please choose your size')
        }else{
            dispatch(addCart(item))
        }
           
            
    }


  return (
    <div className='storeCard'>
        <div className='storeCard_left'>
            <img src={myarray[0].url}/>
        </div>
        <div className='storeCard_right'>
            <div className='storeCard_info'>
                <h2>{myarray[0].title}</h2>
                <h2>{myarray[0].price} DZD</h2>
            </div>
            <div className='storeCard_size'>
                <h3 className='store_h3'>size</h3>
                <form className='size_radio'>
                    <div>
                         <input type='radio' name='size' value='S' onChange={(e)=>setItem({...item,size:e.target.value})}  />
                         <label for="">S</label><br></br>
                    </div>
                   <div>
                        <input type='radio' name='size' id='' value='M' onChange={(e)=>setItem({...item,size:e.target.value})} />
                        <label for="" >M</label><br></br>
                   </div>
                   <div>
                        <input type='radio' name='size' id='' value='L' onChange={(e)=>setItem({...item,size:e.target.value})}  />
                        <label for="tml">L</label><br></br>
                   </div>
                   <div>
                        <input type='radio' name='size' id=''  value='XL' onChange={(e)=>setItem({...item,size:e.target.value})} />
                        <label for="html">XL</label><br></br>
                   </div>
                    <div>
                        <input type='radio' name='size' id=''  value='XXL' onChange={(e)=>setItem({...item,size:e.target.value})}  />
                        <label for="html">XXL</label><br></br>
                    </div>
                </form>
            </div>
            <div className='storeCard_select'>
                <h3 className='store_h3'>size</h3>
                <select className='store_select' value={item.size} onChange={(e)=>setItem({...item,size:e.target.value})}>
                    <option value='38'>38</option>
                    <option value='40'>40</option>
                    <option value='44'>44</option>
                    <option value='48'>48</option>
                </select> 
            </div>
            <div className='storeCard_select'>
                <h3 className='store_h3'>Quantity</h3>
                <select className='store_select' value={item.quantity} onChange={(e)=>setItem({...item,quantity:e.target.value})}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select> 
            </div>
            
                
            <button className='storeCard_btn' onClick={handleClick}> Add to Cart</button>
        </div>

    </div>
  )
}

export default StoreCard