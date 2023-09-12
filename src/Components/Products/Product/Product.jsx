import React from "react";
import bud from "../../../../public/product-bud.png";
import "./Product.css";
function Product() {
  return (
    <div className="product-body">
      <div className="thembmail-cantainer">
        <div>
          <img className="thembmail" src={bud} alt="" />
        </div>
        <div className="product-discription">
          <div>
            <span>title:- </span>
            {"headphone fdfgdfgfgdfg"}
          </div>
          <div>
            <span>Price :-</span> {"599 Rs"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
