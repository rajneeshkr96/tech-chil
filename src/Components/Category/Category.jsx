import React,{useState,useEffect} from 'react'
import Product from '../Products/Product/Product'
import "./Category.css"
import { useParams } from 'react-router-dom'
function Category() {
  const param = useParams()
  const [product,setProduct] = useState([])

  const getData =  ()=>{
    fetch(`https://fakestoreapi.com/products/category/${param.category}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))

  }
  useEffect(() => {
    window.scroll(0,0)
   getData();
  }, []);
  return (
    <div className='products-container main-category'>
        <div className='sec-heading'> {param.category} <div className='line'></div></div>
        <div className='single-products'>
        {  product.map((product)=><Product key={product.id} name={product.title} price={product.price} id={product.id} img={product.image}/>)}
            

        </div>
    </div>

  )
}

export default Category
