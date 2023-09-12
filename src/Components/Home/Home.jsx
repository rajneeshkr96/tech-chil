import React from 'react'
import Banners from './Banner/Banners.jsx'
import Newletters from './Newletter/Newletters.jsx'
import Categoryhome from './CategoryHome/Categoryhome.jsx'
import Products from '../Products/Products.jsx'

function Home() {
  return (
<div>

<Banners/>
<Categoryhome/>
<Products categoryTitle={"All"}/>
<Newletters/>

</div>



  )
}

export default Home
