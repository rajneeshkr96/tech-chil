import React from 'react'
import "./Foot.css"
import { FaCcMastercard,FaCcVisa,FaCcPaypal,FaGooglePay,FaRupeeSign } from "react-icons/fa";
function Foot() {
  return (
    <footer id='footer' className='footer'>
        <section className='footer-sec1 test1'>
            <div className="about">
                <p>About</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex reprehenderit maiores minima nobis, aliquid quo in consectetur. Laborum porro</p>
            </div>
            <div className="contact">
                <p>Contact Us</p>
                <p>R-6395 maharani enclave hastsal uttam nagar new delhi-110059</p>
                <p> +91-9568345626</p>
                <a href="">kakusharma123.com@gmail.com</a>
            </div>
            <div className="categary">
              <p>Categary</p>
              <ul>
                <li>headphone</li>
                <li>Smart watch</li>
                <li>home theater</li>
                <li>projector</li>
                <li>bluetooth speaker</li>
              </ul>
            </div>
            <div className="page">
              <p>Pages</p>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>private & police</li>
                <li>Terms & conditions</li>
              </ul>
            </div>

        </section>
        <section className='footer-sec2' >
        <div>© 2023 for practice perpase all copyright receved by ARG cooperation</div>
        <div className='payment-icons'>
           <FaCcMastercard  className='po-icons'/>  
           <FaCcVisa className='po-icons'/>  
           <FaCcPaypal className='po-icons'/>  
           <FaGooglePay className='po-icons'/>  
           <FaRupeeSign className='po-icons'/>  
           </div>
        </section>
    </footer>
  )
}

export default Foot
