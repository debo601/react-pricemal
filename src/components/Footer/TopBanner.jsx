import React from "react";

function TopBanner() {
  return (
    <section className="top-banner d-flex align-items-center">
      <div className="container">
        <div className="banner-inner d-flex align-items-center justify-content-between">
          <div className="banner-content">
            <h1>We have a deal for you!</h1>
            <h3>
              With 116,947 offers from 49,654 stores, we have a coupon <br />
              to save you an average of $21 on your next purchase
            </h3>
          </div>
          <img src="assets/img/banner-img.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
