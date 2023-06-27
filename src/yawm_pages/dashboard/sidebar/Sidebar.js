import React from 'react'
import './Sidebar.css'
import {Link, useParams} from 'react-router-dom'
const Sidebar = () => {
  const {store} = useParams()
  return (
    <div className='sidebar_wrapper'>
      <div className='sidebar_fixed'>
           <h2 className='sidebar_h2'>Store Manager</h2>
        <ul className='sidebar_nav'>
            <Link to={`/${store}/admin`} ><li className='sidebar_item'>Home</li></Link>
            <Link to={`/${store}/admin/setproducts`} ><li className='sidebar_item'>Products</li></Link>
            <Link to='#' ><li className='sidebar_item'>Order</li></Link>
            <Link to='#' ><li className='sidebar_item'>Discounts</li></Link>
            <Link to='#' ><li className='sidebar_item'>Online Store</li></Link>
        </ul>
      </div>
     
    </div>
  )
}

export default Sidebar