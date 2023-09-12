import React from 'react'
import "./Seach.css"
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch} from "react-icons/bi";
function Search({setsearch}) {
  return (
    <div className='search-container'>
        <div onClick={()=>setsearch(false)} className='close-cart search-close'> <AiOutlineClose/> close </div>
      <div className='search-box'>
      <span ><BiSearch className='search-fix'/></span>
        <input type="text"  placeholder='search your product'/>
      </div>
      <div className='search-results'>

      </div>
    </div>
  )
}

export default Search
