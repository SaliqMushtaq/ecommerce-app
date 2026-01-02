import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import Collection from './pages/collection'
import About from './pages/About' 
import Contact from './pages/contact'
import Product from './pages/product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder' 
import Orders from './pages/Orders'

const App = () => {
  return (
    <div style={{padding: '0 20px'}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productid' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        
      </Routes>
      <h1 style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginTop: '40px'}}>
        App is working 🚀
      </h1>
    </div>
  )
}

export default App

