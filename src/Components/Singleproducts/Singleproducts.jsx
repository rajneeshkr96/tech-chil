import React,{useState,useEffect} from 'react'
import "./singleproducts.css"
import bud from "../../../public/product-bud.png"
import { FaRupeeSign } from "react-icons/fa";
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from "react-icons/bs";
import Category from '../Category/Category';
import { useParams } from 'react-router-dom';
function Singleproducts() {
  const param = useParams()
  const [product,setProduct] = useState()
  const logo_size = "1.5rem"
  const colour = "#241d52";

  const getData =  ()=>{
    fetch(`https://fakestoreapi.com/products/${param.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
  }
  useEffect(() => {
   getData();
  }, []);
  return (
    <div className='singleproduct-container'>
      <div className='sec-heading'>{"single products"}</div>
      <section className='sec1-single-roduct'>
        <div className='thumbmail-container-product margin-top-fix '>
          {product?.image?<img className='single-product-thumbmail' src={product?.image} alt="" />:<img className='single-product-thumbmail' src={bud} alt="" />}
        </div>
        <div className='single-product-discription  '>
          <p >{product?.title}</p>
          <p ><FaRupeeSign style={{fontSize:"1rem"}}/> {product?.price}</p>
          <p className='margin-top-fix'>{product?.description}</p>
          <div className='addtocart margin-top-fix'>
            <span>-</span>
            <span>{"1"}</span>
            <span>+</span>
            <span>Add to cart</span>
          </div>
          <div className='single-cate margin-top-fix'>
            <span>Category </span>{product?.category}
          </div>
          <div className='share-icons-container margin-top-fix'>
          <BsFacebook className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          <BsTwitter className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          <BsInstagram className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          <BsLinkedin className='share-icons' style={{fontSize:logo_size , color:colour}}/>
          </div>

        </div>

      </section>
      <section className='sec2-single-roduct'>
        <Category></Category>
      </section>
    </div>
  )
}

export default Singleproducts
