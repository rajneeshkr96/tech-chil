import React from 'react'
import brimg from '../../../assets/bannors/ban_img.png'
import "./Banner.css"
import logo from "../../../assets/logo/logo.png"

function Banners() {
  return (
    <div>
        <span className='logo'><img width="100rem" src={logo} alt="" /></span>
      <div className='main-banner '>
        <div className='br-fir-child '>
          <div style={{paddingLeft:"6px"}}>
          <p>wireless <br /> headphone</p>
          <p>Feel the bass in your bones</p>
          <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.</p>
          <input type="submit" value={"BUY"} />
          </div>
        </div>
        <div className='br-sec-child' >
            <div className='p-relative'>
              <div >
              <img className='fix-img img-hoverd br-width'src={brimg} alt="" />
              </div>
              <div  className='br-hp '></div>
            </div>
        </div> 
      </div>
      <div className='fix-img-mar'></div>
    </div>
  )
}

export default Banners
