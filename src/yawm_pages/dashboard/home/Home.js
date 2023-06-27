import React, {useState} from 'react'
import './Home.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {axiosRequest} from '../../../axios';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
const Home = () => {
    const {store} = useParams()

    const [storeData, setStoreData] = useState({
        cover:'',
        email:'',
        fb:'',
        twitter:'',
        linkdin:'',
        address:''
    })
    const [logo, setLogo] = useState(null)
    const {cover,email,fb,twitter,linkdin,address}= storeData
    const [contact,setContact] = useState(false)
    const [assets,setAssets] = useState(false)
    const [products, setProducts] = useState(false)
    const onChange =(e)=>{
            setStoreData({...storeData,[e.target.name]:e.target.value})
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        const baseURL = `http://${store}.localhost:8000/store`
        axiosRequest(baseURL).put('/storeUpdate/',{
            logo:logo,
            cover:cover,
            email:email,
            fb:fb,
            twitter:twitter,
            linkedin:linkdin,
            address:address
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))

    }
  return (
    <div className='dashboard_home'>
        <div className='dashboard_home_item'>
            <h3>Setup guide</h3>
            <div className='tasks_done'>
                <p>1 of 8 tasks complete</p>
                <div className='task_div_color'>
                    <div className='task_color'>
                    </div>
                </div>
            </div>
        </div>
     
        <div className='dashboard_home_item'>
            <h4> <DonutLargeIcon/> SET UP YOUR STORE</h4>

        </div>
        <div className='dashboard_home_item'>
                <div className='dashboard_home_item_header'>

                <h3><DonutLargeIcon/> Add Brand Assets </h3>
                <EditIcon onClick={()=>setAssets(!assets)} />
                </div>

        {
            assets?(
              <>
                <p>Start strengthening your presence wherever you sell by adding a logo and other brand assets</p>
                <h3><DonutLargeIcon/> Add Logo</h3>
                <div className='file_input_wrapper'>
                <input type='file' accept="image/*"  name='logo' onChange={(e)=>setLogo(e.target.files[0])} />
                </div>
        
                <h3><DonutLargeIcon/> Add Cover </h3>
                <div className='file_input_wrapper'>
                    <input type='file' name='cover' value={cover} onChange={e=>onChange(e)} accept="image/*" />
                </div>
              </>
       
              
            ):null
        }
        </div>

  
        <div className='dashboard_home_item'>
            <div className='dashboard_home_item_header'>
            <h3><DonutLargeIcon/> Add Your Contact Information </h3>
                <EditIcon onClick={()=>setContact(!contact)} />
            </div>
            <div>
            {
                    contact?(
                    <form className='dashboard_form' onSubmit={(e)=>onSubmit(e)}>
                    <div className='dashboard_input'>
                    <label>email</label>
                    <input type='email' name='email' placeholder='email' value={email} onChange={e=>onChange(e)} />
                    </div>
                    <div className='dashboard_input'>
                        <label>fb</label>
                        <input type='text' name='fb' placeholder='fb' value={fb} onChange={e=>onChange(e)}/>
                    </div>
                    <div className='dashboard_input'>
                        <label>Twitter</label>
                        <input type='text' name='twitter' placeholder='twitter' value={twitter} onChange={e=>onChange(e)}/>
                    </div>
                    <div className='dashboard_input'>
                        <label>Linkdin</label>
                        <input type='text'name='linkdin' placeholder='linkdin' value={linkdin} onChange={e=>onChange(e)}/>
                    </div>
                    <div className='dashboard_input'>
                        <label>Address</label>
                        <input type='text' name='address' placeholder='address' value={address} onChange={e=>onChange(e)}/>
                    </div>
            
                <button type='submit' className='dashboard_home_btn'>submit</button>

                </form>):null
        }
            </div>
     
        
            
            </div>
        <div className='dashboard_home_item'>
        <div className='dashboard_home_item_header'>
        <h3><DonutLargeIcon/> Add your first product</h3>
        <EditIcon onClick={()=>setProducts(!products)} />


        </div>
        {
            products?(
                <>
                <div>
                <h3><DonutLargeIcon/> Add Category</h3>
                <button className='dashboard_home_btn'>Add Category</button>
                </div>
                <div>
                    <h3><DonutLargeIcon/> Add product</h3>
                    <button className='dashboard_home_btn'>Add Product</button>
                </div>
                </>
                
            ):null
        }

     
         
        </div>
    </div>
  )
}

export default Home