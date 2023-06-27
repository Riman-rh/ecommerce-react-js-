import React, { useState} from 'react'
import './Category.css'
import Footer from '../../store_components/footer/Footer'
import ProductCard from '../../store_components/productCard/ProductCard'
import { product } from '../../data'
import Pagination from '../../store_components/pagination/Pagination'
import HomeHeader from '../../store_components/homeHeader/HomeHeader'
const Category = () => {
  const [prodPerPage] = useState(8)
  const[currentPage, setCurrentPage] = useState(1)
  

  const paginate = (pageNumber)=> {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 300)
  }
  //current prods
  const  indexLastProd = prodPerPage * currentPage
  const indexFirstProd = indexLastProd - prodPerPage
  const currentProd = product.slice(indexFirstProd, indexLastProd)


  return (
    <div>
      <div className='category_header'>
          <HomeHeader/>
      </div>
       
       <div className='category_content'>
            <h1>Men Sneakers</h1>
            <div className='category_products'>
              {
                currentProd.map((item,index)=>(<ProductCard id={item.id} title={item.title} price={item.price} url={item.url}/>))
              }
           
            </div>
            <Pagination prodPerPage={prodPerPage} totalProd={product.length}
             currentPage={currentPage} paginate={paginate} />
       </div> 
       <Footer/>
    </div>
  )
}

export default Category