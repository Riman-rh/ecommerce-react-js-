import React,{useState, useEffect} from 'react'
import './Faq.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {axiosRequest} from '../../axios';

const Faq = () => {
    const[showans, setShowans]=useState(false)
    const [faq, setFaq]=useState([])
    useEffect(() => {
        async function fetchData(){
            axiosRequest('http://localhost:8000').get("/faq/").then((response)=>{
          setFaq(response.data)
        })
        }
      
        fetchData()
    
    }, [])
    
  return (
    <>
    {
        faq.length>0?(
            <div className='questions_container'>
        <div className='questions_header'>
            <h1>Frequently Asked Questions</h1>
            
        </div>
        <div className='questions_wrapper'>
            {
                faq?.map((item, index)=>(
                    <div className='question_wrapper'>
                    <div className='question'>
                    <p>{item.q}</p> 
                    <div className='answer_show'>
                        {
                            showans?(<KeyboardArrowUpIcon onClick={()=>setShowans(!showans)} />)
                            :( <KeyboardArrowDownIcon onClick={()=>setShowans(!showans)} />)
                        }
                        
                       
                    </div>
                    </div>
                    {
                        showans && item.r?(  
                        <div className='answer'>
                        <p>{item.r}</p>                         
                        </div>):null
                    }
                  
                </div>

                ))
            }
 
      
        </div>
    </div>
        ):null
    }
    </>
    
    
  )
}

export default Faq