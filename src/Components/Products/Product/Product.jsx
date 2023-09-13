import React from "react";
import bud from "../../../../public/product-bud.png";
import "./Product.css";
function Product({id,name="Not found",price="500",img}) {
  return (
    <div className="product-body">
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
