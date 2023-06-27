import React from 'react'
import Home from './home/Home'
import './Dashboard.css'
import Sidebar from './sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import Setproducts from './setproducts/Setproducts'
import Createproduct from './setproducts/createproduct/Createproduct'
import Createcategory from './setproducts/createcategory/Createcategory'

const Dashboard = () => {
  const {page} = useParams()
  function dashboard(){
    console.log('its me hi')
    switch(page){
      case('setproducts'):
        return <Setproducts/>
      case('createproduct'):
        return <Createproduct/>
      case('createcategory'):
        return <Createcategory/>
      default:
        return <Home/>
    }

  }
  return (

    <div className='dashboard_wrapper'>
        <Sidebar/>
        <div className='dashboard_content'>
        {
          dashboard()
        }
        </div>
 
    </div>
  )
}

export default Dashboard