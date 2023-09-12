import React from 'react'
import Product from '../Products/Product/Product'
import "./Category.css"
function Category() {
  return (
    <div className='products-container main-category'>
        <div className='sec-heading'> {"categoryTitle"} <div className='line'></div></div>
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

export default Category
