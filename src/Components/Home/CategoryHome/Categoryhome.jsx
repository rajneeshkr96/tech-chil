import React from 'react'
import "./Categoryhome.css"
import catgaimg from "../../../../public/CateHeadphone.png"
function Categoryhome({category}) {
  return (
   <section>
    <div className='categorys'>
 {   category.map((category) =><div className='category'>
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
