import React from 'react'
import Product from './Product/Product'
import "./Products.css"
function Products({categoryTitle,productDetail}) {
  return (
    <div className='products-container'>
        <div className='sec-heading'> {categoryTitle} <div className='line'></div></div>
        <div className='single-products'>
          {productDetail.map((data)=><Product name={data.title} price={data.price} img={data.image} id={data.id}/>)}
            

        </div>
    </div>
  )
}

export default Products
