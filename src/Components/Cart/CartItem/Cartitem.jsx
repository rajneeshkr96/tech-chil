import React from 'react'
import "./Cartitem.css"
import { AiOutlineClose } from "react-icons/ai";
import cartimg from "../../../../public/product-bud.png"
function Cartitem() {
  return (
    <div className='cartitem-container'>

          <div className='cart-thumbmail-container'>
            <img className='cart-thumbmail' src={cartimg} alt="" />
          </div>

          <div className='cart-item-details'>
            <p>title</p>
            <div className='addtocart margin-top-fix cart-value'>
              <span>-</span>
              <span>{"1"}</span>
              <span>+</span>
              <span>Add to cart</span>
            </div>
            <div className='cart-qantity'>
              {"1"}x{"299"}
            </div>
          </div>
          <div className='close-cart'>
          <AiOutlineClose/>            
          </div>
       
    </div>
  )
}

export default Cartitem
