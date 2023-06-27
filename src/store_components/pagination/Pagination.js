import React from 'react'
import './Pagination.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = ({prodPerPage,totalProd,paginate,currentPage}) => {
    const pageNumbers = []
    for(let i=1; i <= Math.ceil(totalProd/prodPerPage); i++){
        pageNumbers.push(i)
    }

    const handlePrevious=()=>{
        if(currentPage>1){
            const prv = currentPage -1
            paginate(prv)
        }
    }
    const handleNext=()=>{
        if(currentPage < pageNumbers.length){
            const nxt = currentPage +1
            paginate(nxt)
        }
    }
   
  return (
    <nav className='pagination_nav'>
        <ul className='pagination_list'>
            <button className='previous_page' onClick={handlePrevious}>
                <ArrowBackIosIcon/>
            </button>
            {
                pageNumbers.length<6 ?
                ( pageNumbers.map((number)=>(

                    <li className={number==currentPage?('pagination_item current'):('pagination_item')}  key={number} onClick={()=>paginate(number)} href='!#'>
                        {number}
                    </li>
                ))):
                (
                    currentPage < 3?
                    ( <>
                    <li className={1==currentPage?('pagination_item current'):('pagination_item')} key='1'  onClick={()=>paginate(1)} href='!#'>
                        1
                        </li>
                         <li className={2==currentPage?('pagination_item current'):('pagination_item')} key='2'  onClick={()=>paginate(2)} href='!#'>
                         2
                        </li>
                        <li className={3==currentPage?('pagination_item current'):('pagination_item')} key='4'  onClick={()=>paginate(3)} href='!#'>
                        3
                        </li>
                        <li>...</li>
                        <li className={pageNumbers.length==currentPage?('pagination_item current'):('pagination_item')} key={pageNumbers.length}  onClick={()=>paginate(pageNumbers.length)}>{pageNumbers.length}</li>

                        </>
                        ):
                    (currentPage+2 > pageNumbers.length?(
                        <>
                        <li className='pagination_item ' key='1'   onClick={()=>paginate(1)} href='!#'>
                        1
                        </li>
                        <li>...</li>
                        <li  className={pageNumbers.length-2==currentPage?('pagination_item current'):('pagination_item')} key={pageNumbers.length-2} onClick={()=>paginate(pageNumbers.length-2)} href='!#'>
                        {pageNumbers.length-2}
                        </li>
                        <li className={pageNumbers.length-1==currentPage?('pagination_item current'):('pagination_item')} key={pageNumbers.length-1} onClick={()=>paginate(pageNumbers.length-1)} href='!#'>
                        {pageNumbers.length-1}
                        </li>
                        <li className={pageNumbers.length==currentPage?('pagination_item current'):('pagination_item')} key={pageNumbers.length}  onClick={()=>paginate(pageNumbers.length)} href='!#'>
                            {pageNumbers.length}
                        </li>
                        </>
                    )
                    :(<>
                         <li className='pagination_item'  onClick={()=>paginate(1)} href='!#'>
                            1
                        </li>
                        <li>...</li>
                        <li className='pagination_item' key={currentPage-1}  onClick={()=>paginate(currentPage-1)} href='!#'>
                            {currentPage-1}
                        </li>
                        <li className='pagination_item current' key={currentPage} onClick={()=>paginate(currentPage)} href='!#'>
                            {currentPage}
                        </li>
                        <li className='pagination_item' key={currentPage+1} onClick={()=>paginate(currentPage+1)}>
                            {currentPage+1}
                        </li>
                        <li>...</li>
                        <li className='pagination_item' key={pageNumbers.length}  onClick={()=>paginate(pageNumbers.length)} href='!#'>
                            {pageNumbers.length}
                        </li>
                     </>))
                )
            }
        
            <button className='next_page' onClick={handleNext}>
                <ArrowForwardIosIcon/>
            </button>
        </ul>
    </nav>
  )
}

export default Pagination