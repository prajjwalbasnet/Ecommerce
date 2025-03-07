import React from "react"
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import Product from "./pages/Product"
import { ToastContainer, toast } from 'react-toastify';
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"


function App() {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      <ToastContainer />

      <NavBar/>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/orders" element={<Orders/>} />

      </Routes>
      <Footer />

    </div>
  )
}

export default App
