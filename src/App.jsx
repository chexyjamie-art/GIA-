import Home from "./pages/Home"

function App(){
  return <Home/>
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"

function App(){
  return(
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App