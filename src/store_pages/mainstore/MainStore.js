import React from 'react'
import Header from '../../store_components/header/Header'
import Cart from '../cart/Cart'
import Category from '../category/Category'
import Home from '../home/Home'
import Store from '../store/Store'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Categories from '../../store_components/categories/Categories'
const MainStore = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' exact element={ <Home/>}/>
      
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/store/:id' element={<Store/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default MainStore