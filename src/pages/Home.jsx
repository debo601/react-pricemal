import React from "react";
import Header from "../components/Header/Header";
import FeaturedProducts from "../components/Header/FeaturedProducts";
import PopularProduct from "../components/Header/PopularProducts";
import TopCoupons from "../components/Header/TopCoupons";
import TopDeals from "../components/Header/TopDeals";
import PopularBrands from "../components/Header/PopularBrands";
import Footer from "../components/Header/Footer";

// import "./Home.css";
// import Categories from "../components/Header/Categories";

function Home() {
  return (
    <div>
      <Header />
      <section className="top-banner d-flex align-items-center">
        <div className="container">
          <div className="banner-inner d-flex align-items-center justify-content-between">
            <div className="banner-content">
              <h1>We have a deal for you!</h1>
              <h3>
                With 116,947 offers from 49,654 stores, we have a couponto save
                you an average of $21 on your next purchase
              </h3>
            </div>
            <img src="assets/img/banner-img.png" alt="" />
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <PopularProduct />
      <TopCoupons />
      <TopDeals />
      <PopularBrands />
      <Footer />

      <div className="copyright-sec text-center">
        <div className="container">© 2024 Pricemal. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Home;
