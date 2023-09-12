import React, { useState } from 'react'
import context from './Context'

function UseState({children}) {
  const [Cart, setCart] = useState([])
  return (
    <context.Provider value={{Cart,setCart}}>
        {children}
    </context.Provider>
  )
}

export default UseState
