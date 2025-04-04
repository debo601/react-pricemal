import React from "react";
import Header from "../components/Header/Header";
import FeaturedProducts from "../components/Header/FeaturedProducts";
import PopularProduct from "../components/Header/PopularProducts";
import TopCoupons from "../components/Header/TopCoupons";
// import TopDeals from "../components/Header/StoreDirectory";
import StoreDirectory from "../components/Header/StoreDirectory";
import PopularBrands from "../components/Header/PopularBrands";
import Footer from "../components/Footer/Footer";
import TopBanner from "../components/Footer/TopBanner";
import TopDeals from "./TopDeals";

// import "./Home.css";
// import Categories from "../components/Header/Categories";

function Home() {
  return (
    <div>
      <Header />
      <TopBanner />
      <FeaturedProducts />
      <PopularProduct />
      <TopCoupons />
      <TopDeals />
      <StoreDirectory />
      {/* <Categories />   */}
      <PopularBrands />
      <Footer />

      <div className="copyright-sec text-center">
        <div className="container">© 2024 Pricemal. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Home;
