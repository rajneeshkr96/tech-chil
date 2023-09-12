import React from 'react'
import "./Cart.css"
import { FaOpencart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX} from "react-icons/bs";
import Cartitem from './CartItem/Cartitem';
import { FaRupeeSign } from "react-icons/fa";
function Cart({setcart}) {
  return (
    <div className='Cart-container'>

        <div className='cart-backbround'></div>
        <div className="cart-containt " >
            <div className='cart-head'> 
            <div><FaOpencart style={{marginRight:"0.5rem"}}/>  Shoping cart </div>
             <div onClick={()=>setcart(false)} className='close-cart'> <AiOutlineClose/> close </div>
            </div>
            <div className='cartitams-container'>

            {/* <div className="cart-empty">
                <BsCartX className='empty-icon'/>
                <p>no products in this cart</p>
                <button className='close-cart' onClick={()=>setcart(false)}>return to shop</button>
            </div> */}

            <Cartitem></Cartitem>

            </div>
            <div className="cart-footer">
                <div>
                    <p>subtotal:</p>
                    <p ><FaRupeeSign style={{fontSize:"1rem"}}/> 963-</p>
                </div>
                <button>checkout</button>
                </div>
           
            </div>
      
    </div>
  )
}

export default Cart
