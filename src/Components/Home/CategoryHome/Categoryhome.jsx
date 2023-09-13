import React from 'react'
import "./Categoryhome.css"
import catgaimg from "../../../../public/CateHeadphone.png"
function Categoryhome({category}) {
    const headphone = "headphone";
    console.log(category)
  return (
   <section>
    <div className='categorys'>
 {   category.map((category) =><div className='category'>
            <p>{category}</p>
            <img className='cate-img' src={catgaimg} alt="" />
        </div>)}
        


    </div>
   </section>
  )
}

export default Categoryhome
