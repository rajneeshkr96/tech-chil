import React from "react";
import bud from "../../../../public/product-bud.png";
import "./Product.css";
import { useNavigate } from "react-router-dom";
function Product({id,name="Not found",price="500",img}) {
  const navigate = useNavigate()
  return (
    <div className="product-body" onClick={()=>navigate(`/singleproduct/${id}`)}>
      <div className="thembmail-cantainer">
        
        <div className="img-container">
         {img? <img className="thembmail" src={img}  alt="" />: <img className="thembmail" src={bud}  alt="" />}
          
        </div>
        <div className="product-discription">
          <div>
            <span>title:- </span>
            <span>
            {name}
            </span>
          </div>
          <div>
            <span>Price :-</span> {price} RS
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
