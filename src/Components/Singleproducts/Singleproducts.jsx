import React from 'react'
import "./singleproducts.css"
import bud from "../../../public/product-bud.png"
import { FaRupeeSign } from "react-icons/fa";
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from "react-icons/bs";
import Category from '../Category/Category';
function Singleproducts() {
  const logo_size = "1.5rem"
  const colour = "#241d52";
  return (
    <div className='singleproduct-container'>
      <div className='sec-heading'>{"single products"}</div>
      <section className='sec1-single-roduct'>
        <div className='thumbmail-container-product margin-top-fix '>
          <img className='single-product-thumbmail' src={bud} alt="" />
        </div>
        <div className='single-product-discription  '>
          <p >Mivi DuoPods K7 Metallic Finish,AI ENC,50H Playtime,Low Latency Gaming,Rich Bass,5.3 Bluetooth Headset  (Coral, In the Ear)</p>
          <p ><FaRupeeSign style={{fontSize:"1rem"}}/> 963-</p>
          <p className='margin-top-fix'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reiciendis delectus fuga blanditiis quam omnis deserunt fugiat, expedita soluta similique ducimus repudiandae iste non possimus, iusto eos cupiditate quidem commodi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, deleniti provident placeat aspernatur fuga molestias. Atque magnam blanditiis obcaecati. Sit blanditiis itaque autem iure ex minus dignissimos optio fuga dolorem.</p>
          <div className='addtocart margin-top-fix'>
            <span>-</span>
            <span>{"1"}</span>
            <span>+</span>
            <span>Add to cart</span>
          </div>
          <div className='single-cate margin-top-fix'>
            <span>Category </span>{"buds"}
          </div>
          <div className='share-icons-container margin-top-fix'>
          <BsFacebook className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          <BsTwitter className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          <BsInstagram className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          <BsLinkedin className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          </div>

        </div>

      </section>
      <section className='sec2-single-roduct'>
        <Category></Category>
      </section>
    </div>
  )
}

export default Singleproducts
