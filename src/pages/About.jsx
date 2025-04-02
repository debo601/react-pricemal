import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <>
      <Header />
      <section class="top-banner inner d-flex align-items-center">
        <div class="container">
          <div class="banner-inner d-flex align-items-center justify-content-between">
            <div class="banner-content">
              <h1>Your Guide to Better Buys - Honest Product Reviews</h1>
            </div>
            <img src="assets/img/review-img.png" alt="" />
          </div>
        </div>
      </section>
      <section class="about-us">
        <div class="container">
          <p>
            We're Pricemal - Founded in 2024, Pricemal is Saudi Arbia's leading
            online comparison shopping site. We're here to help you make
            brilliant buying decisions by putting information and knowledge in
            your hands. Pricemal lists millions of products from hundreds of
            retailers nationwide and attracts hundreds of thousands of visitors
            each month.
          </p>
          <p>
            Pricemal is part of Future PLC an international media group and
            leading digital publisher
          </p>
          <div class="ab-info d-flex align-items-center justify-content-between">
            <div class="ab-left">
              <h3>Our Vision</h3>
              <p>
                Pricemal strives to be the leading comparison shopping site in
                Middle East Region, by delivering expectational value and
                functionality to its users, retailers and partners, whilst
                growing a company that values each team members.
              </p>
            </div>
            <div class="ab-right d-flex align-items-center justify-content-center">
              <img src="assets/img/ab-img1.png" alt="" />
            </div>
          </div>
          <div class="ab-info d-flex align-items-center justify-content-between">
            <div class="ab-left">
              <h3>Our Key Pillars</h3>
              <p>
                To seamlessly connect shoppers with our partners across
                Southeast Asia, in providing the widest selection of products,
                no matters what they are looking for.
              </p>
            </div>
            <div class="ab-right d-flex align-items-center justify-content-center"></div>
          </div>
          <div class="ab-block-list d-flex align-items-strech justify-content-between">
            <div class="ab-block">
              <div class="ab-block-img">
                <img src="assets/img/ab-img2.png" alt="" />
              </div>
              <h4>Variety</h4>
              <p>
                Widest selection of products from over 1500 partners across
                Southeast Asia
              </p>
            </div>
            <div class="ab-block">
              <div class="ab-block-img">
                <img src="assets/img/ab-img3.png" alt="" />
              </div>
              <h4>Safety</h4>
              <p>
                Stringent selection process of acquiring high quality partners.
              </p>
            </div>
            <div class="ab-block">
              <div class="ab-block-img">
                <img src="assets/img/ab-img4.png" alt="" />
              </div>
              <h4>Savings</h4>
              <p>
                Offers price comparison features partners delivery information
                and great coupon deals to save time and money
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
