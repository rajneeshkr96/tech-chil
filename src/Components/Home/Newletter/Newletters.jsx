import React from 'react'
import "./Newletters.css";
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from "react-icons/bs";

function Newletters() {
  const logo_size = "1.9rem"
  const colour = "#241d52";
  return (
    <section className='newletter'>
      <p>new letter</p>
      <p>sign up for latest updates and offers</p>
      <form className='newletter-form' action="">
        <input type="email" placeholder='Enter Your Email' />
        <input type="submit" value="Subscribe"/>
      </form>
      <p>will be used in according with our private policy </p>
      <div className='newbener'></div>
      <div className='new-letter-logo'>
      <BsFacebook style={{fontSize:logo_size , color:colour}}/>
      <BsTwitter style={{fontSize:logo_size , color:colour}}/>
      <BsInstagram style={{fontSize:logo_size , color:colour}}/>
      <BsLinkedin style={{fontSize:logo_size , color:colour}}/>
      </div>
    </section>
  )
}

export default Newletters
