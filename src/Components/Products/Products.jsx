import React from 'react'
import Product from './Product/Product'
import "./Products.css"
function Products({categoryTitle}) {
  return (
    <div className='products-container'>
        <div className='sec-heading'> {categoryTitle} <div className='line'></div></div>
        <div className='single-products'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default Products
