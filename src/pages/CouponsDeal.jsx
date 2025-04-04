import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import amazon from "../utilities/assets/img/amazon.png";
// import logo from "../utilities/assets/img/logo.png";

const CouponsDeal = () => {
  const [coupons, setCoupons] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch(
      "https://apitestpricemal.nodejsdapldevelopments.com/api/affiliate-coupons"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.status === "success") {
          setCoupons(data.data.coupons || []);
          setStores(data.data.stores || []);
        } else {
          console.error("API Error:", data.message);
        }
      })
      .catch((error) => console.error("Fetch Error:", error));
  }, []);
  return (
    <>
      <Header />
      <section className="top-banner inner d-flex align-items-center">
        <div className="container">
          <div className="banner-inner d-flex align-items-center justify-content-between">
            <div className="banner-content">
              <h1>Unlock Incredible Savings with Every Deal!</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="breadcrumb-tab">
        <div className="container">
          <p>
            <Link to="/">Home</Link> <i className="fa-solid fa-angle-right"></i>
            <Link to="/couponsD eal">Coupon & Deal</Link>
          </p>
        </div>
      </div>

      <section className="coupon-deal-sec">
        <div className="container">
          <div className="cd-btnset d-flex align-items-center justify-content-center">
            <Link to="/" className="btn btn-primary">
              Coupon
            </Link>
            <Link to="/" className="btn btn-primary">
              Deal
            </Link>
          </div>

          <div className="store-offers-main">
            <h3>Stores having offers</h3>
            <div className="store-offer-slider d-flex align-items-start">
              {coupons.length > 0 ? (
                coupons
                  .filter((coupon) => coupon.id === coupon.id)
                  .map((coupon, index) => (
                    <div key={index} className="store-offer-block">
                      <div className="so-inner">
                        <div className="so-block">
                          <Link to={`/coupon/${coupon.slug}`}>
                            {" "}
                            <div className="so-logo">
                              <img src={coupon.image} alt={coupon.title} />
                            </div>
                            <div className="so-link">
                              <span>
                                <i className="fa-solid fa-tag"></i>{" "}
                                {coupon.title}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <p>No stores available</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="deals-coupon-list">
        <div className="container">
          <h3>Deals and Coupons</h3>
          <div className="dcl-inner">
            {coupons.length > 0 ? (
              coupons.map((coupon, index) => (
                <div key={index} className="dcl-block">
                  <Link to="">
                    <div className="dcl-tag">
                      <span>{coupon.type || "Coupon"}</span>
                    </div>
                    <div className="dcl-img">
                      <img
                        src={coupon.image || "assets/img/default-coupon.png"}
                        alt={coupon.name}
                      />
                    </div>
                    <p>{coupon.title}</p>
                    <div className="dcl-link-coupon">
                      <span className="dcl-code">
                        {`---------------${coupon.coupon_id}` || "N/A"}
                        {console.log(coupon.coupon_id)}
                      </span>
                      <span className="dcl-overlay">Show Code</span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No coupons available</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CouponsDeal;
