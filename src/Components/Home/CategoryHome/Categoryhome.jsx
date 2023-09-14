import React, { useEffect } from 'react'
import "./Categoryhome.css"
import catgaimg from "../../../../public/CateHeadphone.png"
import { useNavigate } from 'react-router-dom'
function Categoryhome({category}) {
 
    const navigate = useNavigate()
  return (
   <section>
    <div className='categorys'>
 {   category.map((category,index) =><div key={index} className='category' onClick={()=>navigate(`/category/${category}`)}>
            <span>{category}</span>
            <div className='ctg-img'>
            <img className='cate-img' src={catgaimg} alt="" />
            </div>
        </div>)}
        
    </div>
   </section>
  )
}

export default Categoryhome
