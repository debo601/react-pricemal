import React from 'react'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import BrandProduct from './pages/BrandProduct'
import Compare from './pages/Compare'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
        <Route path='/brandproduct' element={<BrandProduct />} />
        <Route path='/compare' element={<Compare />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App