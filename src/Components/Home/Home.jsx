import React, { useEffect, useState } from 'react'
import Banners from './Banner/Banners.jsx'
import Newletters from './Newletter/Newletters.jsx'
import Categoryhome from './CategoryHome/Categoryhome.jsx'
import Products from '../Products/Products.jsx'

function Home() {
  const [product,setProduct] = useState([])
  const [category,setCategory] = useState([])
  const getData =  ()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))
  }
  useEffect(() => {
   getData();
  }, []);
  return (
<div>

<Banners/>
<Categoryhome category={category}/>
<Products categoryTitle={"All"} productDetail={product}/>
<Newletters/>

</div>



  )
}

export default Home
