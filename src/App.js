import React from 'react'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import BrandProduct from './pages/BrandProduct'
import Compare from './pages/Compare'
import Home from './pages/Home'
import Terms from './pages/Terms'
import CouponsDeal from './pages/CouponsDeal'
import ContactUs from './pages/ContactUs'
// import SearchResults from "./pages/SearchResults";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy'
import SubcategoryPage from "./pages/SubCategoryPage"




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
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/couponsdeal' element={<CouponsDeal />} />
        <Route path='/terms' element={<Terms />} />
        {/* <Route path="/search" element={<SearchResults />} /> */}
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route
          path="/category/:parentSlug/:subcategorySlug"
          element={<SubcategoryPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;