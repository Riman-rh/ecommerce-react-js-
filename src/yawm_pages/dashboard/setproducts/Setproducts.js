import React,{useEffect, useState} from 'react'
import './Setproducts.css'
import { axiosRequest } from '../../../axios'
import  {Link, useParams} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
const Setproducts = () => {
    const {store} = useParams()
    const baseURL = `http://${store}.localhost:8000/store`
    const [products, setProducts] = useState([])

  useEffect(()=>{
    axiosRequest(baseURL).get(('/productList/')).then((res)=>{
           setProducts(res.data) 
    })
  },[])
  return (
    <div>
        {
            products.length === 0?(
                <div className='setproducts_empty'>
                    <p>you have no product yet, add your first product now!</p>
                    <Link to={`/${store}/admin/createproduct`}><button>Add Product</button></Link> 
                </div>
            ):(<div className='setproducts_wrapper'>
              <div className='setproducts_header'>
                  <div className='setproducts_header_item'>Total Products 0</div>
                  <Link to={`/${store}/admin/createcategory`} className='setproducts_product_link'><div className='setproducts_header_item'>New Category</div></Link>
                  <Link to={`/${store}/admin/createproduct`} className='setproducts_category_link'><div className='setproducts_header_item'>New Product</div></Link>

              </div>
              <div className='setproducts'>
              <div className='setproducts_products'>
                  <div className='setproducts_img'>
                  </div>
                  <div className='setproducts_product_item'>
                    Title
                  </div>
                  <div className='setproducts_product_item'>
                    Quantity
                  </div>
                  <div className='setproducts_product_item'>
                    Update
                  </div>

              </div>
              <div className=''>
                {
                  products.map((product, index)=>(
                  
                          <div className='setproducts_product'>
                          <div className='setproducts_img'>
                          </div>
                          <div className='setproducts_product_item'>
                            {product.name_en}
                          </div>
                          <div className='setproducts_product_item'>
                            {product.quantity}
                          </div>
                          <div className='setproducts_product_item'>
                            <EditIcon/>
                          </div>
                       </div>
                      ))
                 
                }
                
              </div>
              </div>

            </div>)
        }

    </div>
  )
}

export default Setproducts