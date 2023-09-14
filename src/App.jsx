
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Category from "./Components/Category/Category"
import Singleproducts from "./Components/Singleproducts/Singleproducts"
import UseState from "./Utils/UseState"
import Head from "./Components/Head/Head"
import Foot from "./Components/Foot/Foot"

function App() {
  return (
    <UseState>
    <BrowserRouter>
      <Head/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/category/:category" element={<Category/>} />
      <Route path="/singleproduct/:id" element={<Singleproducts/>} />
    </Routes>
      <Foot/>
    </BrowserRouter>
    </UseState>
  )
}

export default App
