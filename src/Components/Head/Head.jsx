import React, { useState } from 'react'
import "./Head.css"
import context from '../../Utils/Context'
import { BiSearch,BiCart } from "react-icons/bi";
import Cart from '../Cart/Cart';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
function Head() {
  const [isActive, setIsActive] = useState(false);
  const [cart, setcart] = useState(false);
  const [search, setsearch] = useState(false);

  
  const manu = (e) => {
    setIsActive(current => !current);
    console.log(isActive)
    
    
  }
  
  return (
    <>
    <header className='main-header'>
        <div  className={`header-content ${isActive ? 'flex flex-center' : ''} `}>
          <div  className={`threedot ${isActive ? 'threedot-addon light ' : ''} `} onClick={manu}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        <span   className={`search ${isActive ? 'hid' : ''} `}><BiSearch style={{fontSize:"1.8rem"}}
          onClick={()=>setsearch(true)}/></span>
        <div className='Navbar'>
       <ul  className={`left ${isActive ? 'flex' : ''} `}>

        <li><Link to={"/"}>Home</Link> </li>
        <li> <Link href="footer"  >About Us</Link></li> 
        <li><Link>Category</Link></li>
       </ul>
       <span  className={`cart-icon ${isActive ? 'hid' : ''} `}><BiCart style={{fontSize:"1.8rem"}} onClick={()=>setcart(true)}/> <span onClick={()=>setcart(true)}>{"1"}</span></span>

        </div>

        </div>
        
    </header>
    
    { cart && <Cart setcart={setcart}></Cart>}
    { search && <Search setsearch={setsearch}></Search>}

    </>
  )
}

export default Head
