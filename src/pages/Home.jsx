import React from "react";
import Header from "../components/Header/Header";
import FeaturedProducts from "../components/Header/FeaturedProducts";
import PopularProduct from "../components/Header/PopularProducts";
import TopCoupons from "../components/Header/TopCoupons";
import InstantCompare from "../components/Header/InstantCompare";
// import TopDeals from "../components/Header/StoreDirectory";
import StoreDirectory from "../components/Header/StoreDirectory";
import PopularBrands from "../components/Header/PopularBrands";
import Footer from "../components/Footer/Footer";
import TopBanner from "../components/Footer/TopBanner";
import TopDeals from "./TopDeals";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// import "./Home.css";
// import Categories from "../components/Header/Categories";

function Home() {
  return (
    <div>
      <Header />
      {/* <Categories /> */}
      <TopBanner />
      <InstantCompare />
      <FeaturedProducts />
      <PopularProduct />
      <TopCoupons />

      <TopDeals />
      <StoreDirectory />

      <PopularBrands />
      <Footer />

      <div className="copyright-sec text-center">
        <div className="container">© 2024 Pricemal. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Home;
