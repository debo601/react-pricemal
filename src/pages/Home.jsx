import React from "react";
import Categories from "../components/Header/Categories";

function Home() {
  return (
    <div>
      <div>
        <header className="header-main">
          <div className="container">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-tab">
                <a href="" className="logo">
                  <img src="assets/img/logo.png" alt="Logo" />
                </a>
              </div>

              <div className="search-tab">
                <div className="search-group">
                  <input
                    type="text"
                    placeholder="Search price, deal & coupons"
                  />
                  <button type="button">Search Now</button>
                </div>
              </div>

              <div className="m-search">
                <a href="javascript:void(0);" className="m-search-btn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>

              <div className="button-tab d-flex align-items-center">
                <Categories /> {/* Use the Categories component here */}
                <div className="coupon-tab">
                  <button className="btn btn-primary">Coupon & Deals</button>
                  <div className="coupon-menu">
                    <ul>
                      <li>
                        <a href="">Mobile Phones</a>
                      </li>
                      <li>
                        <a href="">Mobile Phones Accessories</a>
                      </li>
                      <li>
                        <a href="">Tablets</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
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
      <section className="featured-product">
        <div className="container">
          <div className="section-title-top d-flex align-items-center justify-content-between">
            <h3>Featured Products</h3>
            <a href="" className="btn btn-secondary">
              View all
            </a>
          </div>
          <div className="section-content">
            <div className="feature-slider d-flex align-items-center">
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-product bg-grey">
        <div className="container">
          <div className="section-title-top d-flex align-items-center justify-content-between">
            <h3>Compare Price on Popular Products</h3>
            <a href="" className="btn btn-secondary">
              View all
            </a>
          </div>
          <div className="section-content">
            <div className="feature-slider d-flex align-items-center">
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
              <div className="product-block">
                <div className="product-img">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <div className="product-title">Apple iPhone 11 64GB</div>
                <div className="product-price">
                  from <span>S$438.67</span>
                </div>
                <div className="product-btns d-flex align-items-center flex-column">
                  <a href="" className="btn btn-secondary">
                    Buy Now
                  </a>
                  <a href="" className="btn btn-primary">
                    Compare Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-coupons">
        <div className="container">
          <div className="section-title-top d-flex align-items-center justify-content-between">
            <h3>Top Coupons</h3>
            <a href="" className="btn btn-secondary">
              View all
            </a>
          </div>
          <div className="section-content">
            <div className="offers-list d-flex align-items-start flex-wrap">
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
              <div className="offer-block">
                <a href="">
                  <div className="offer-img">
                    <img src="assets/img/coupon-1.png" alt="" />
                  </div>
                  <div className="offer-content">
                    <h3>50% off hotel</h3>
                    <p>35 offers</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="store-directory bg-grey">
        <div className="container">
          <div className="section-title-top d-flex align-items-center justify-content-between">
            <h3>Top Coupons</h3>
          </div>
          <div className="section-content">
            <div className="brand-list d-flex align-items-start flex-wrap">
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand1.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand2.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand3.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand4.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand5.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand1.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand2.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand3.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand4.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand5.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-brands">
        <div className="container">
          <div className="section-title-top d-flex align-items-center justify-content-between">
            <h3>Popular Brands</h3>
            <a href="" className="btn btn-secondary">
              View all
            </a>
          </div>
          <div className="section-content">
            <div className="brand-list d-flex align-items-start flex-wrap">
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand1.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand2.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand3.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand4.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand5.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand1.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand2.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand3.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand4.png" alt="" />
                </a>
              </div>
              <div className="brand-block">
                <a href="">
                  <img src="assets/img/brand5.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-main">
        <div className="container">
          <div className="footer-inner d-flex align-items-start justify-content-between">
            <div className="footer-block">
              <a href="" className="footer-logo">
                <img src="assets/img/logo-white.png" alt="" />
              </a>
              <p>
                Pricemal aim to help consumers find the lowest prices on a wide
                range of products by comparing and choosing the best deal.
                Maximise savings and ensure to get the best possible value.
              </p>
            </div>
            <div className="footer-block">
              <h3>Best Prices</h3>
              <ul>
                <li>
                  <a href="">Computers</a>
                </li>
                <li>
                  <a href="">Electronics</a>
                </li>
                <li>
                  <a href="">Home & Garden</a>
                </li>
                <li>
                  <a href="">Clothing & Jewellery</a>
                </li>
                <li>
                  <a href="">Health & Beauty</a>
                </li>
                <li>
                  <a href="">Coupons</a>
                </li>
                <li>
                  <a href="">More</a>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Product Review</a>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <div className="newsletter-block">
                <h4>Subscribe to our Newsletter</h4>
                <div className="nw-form">
                  <input type="text" placeholder="Email address" />
                  <button type="submit" className="nw-btn">
                    Submit
                  </button>
                </div>
              </div>
              <div className="social-links">
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="email-info">
                <p>
                  <a href="">
                    <i className="fa-solid fa-envelope"></i> Info@pricemal.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Disclaimer: All trademarks / logos / brands are the property of
              their respective owners. Due to technical constraints, Pricemal
              does not guarantee the accuracy of the information. or any errors
              in such information.
            </p>
          </div>
        </div>
      </footer>
      <div className="copyright-sec text-center">
        <div className="container">© 2024 Pricemal. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Home;
