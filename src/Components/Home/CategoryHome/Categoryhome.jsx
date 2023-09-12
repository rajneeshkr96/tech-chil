import React from 'react'
import "./Categoryhome.css"
import catgaimg from "../../../../public/CateHeadphone.png"
function Categoryhome() {
    const headphone = "headphone";
  return (
   <section>
    <div className='categorys'>
        <div className='category'>
            <p>{headphone}</p>
            <img className='cate-img' src={catgaimg} alt="" />
        </div>
        <div className='category'>
            <p>{headphone}</p>
            <img className='cate-img' src={catgaimg} alt="" />
        </div>
        <div className='category'>
            <p>{headphone}</p>
            <img className='cate-img' src={catgaimg} alt="" />
        </div>
        <div className='category'>
            <p>{headphone}</p>
            <img className='cate-img' src={catgaimg} alt="" />
        </div>

    </div>
   </section>
  )
}

export default Categoryhome
