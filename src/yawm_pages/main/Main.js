import React, {useState} from 'react'
import { Header } from '../../yawm_components/header/Header'
import Home from '../home/Home'
import Services from '../services/Services'
import Faq from '../faq/Faq'
import Contact from '../contact/Contact'
import Footer from '../../yawm_components/footer/Footer'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Activation from '../activation/Activation'
import Dashboard from '../dashboard/Dashboard'
import Createstore from '../createstore/Createstore'

const Main = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <Router>
        <Header setShowLogin={setShowLogin} />
        {
          showLogin?(<Login setShowLogin={setShowLogin} showLogin={showLogin} />):(null)
        }
      
        <Routes>
      
        <Route path='/' exact element={ <Home />}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/createstore' element={<Createstore/>}/>
        <Route path='/activate/:uid/:token' element={<Activation/>}/>
        <Route path='/:store/admin'>
          <Route path=''  element={<Dashboard/>}/>
          <Route path=':page' element={<Dashboard/>}/>
        </Route>
        </Routes>
    </Router>
  )
}

export default Main