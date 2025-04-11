import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import OfferCategories from "./OfferCategories";
import Footer from "../components/Footer/Footer";
import "./CouponsDealModal.css";

const CouponsDeal = () => {
  const [coupons, setCoupons] = useState([]);
  const [stores, setStores] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

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

  const openModal = (coupon) => {
    setSelectedCoupon(coupon);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCoupon(null);
    setShowModal(false);
  };

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
            <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i>
            <a href="/couponsdeal">Coupon & Deal</a>
          </p>
        </div>
      </div>

      <section className="coupon-deal-sec">
        <div className="container">
          <div className="cd-btnset d-flex align-items-center justify-content-center">
            <button className="btn btn-primary">Coupon</button>
            <button className="btn btn-primary">Deal</button>
          </div>

          <div className="store-offers-main">
            <h3>Stores having offers</h3>
            <div className="store-offer-slider d-flex align-items-start">
              {coupons.length > 0 ? (
                coupons.map((coupon, index) => (
                  <div key={index} className="store-offer-block">
                    <div className="so-inner">
                      <div
                        className="so-block"
                        onClick={() => openModal(coupon)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="so-logo">
                          <img src={coupon.image} alt={coupon.title} />
                        </div>
                        <div className="so-link">
                          <span>
                            <i className="fa-solid fa-tag"></i> {coupon.title}
                          </span>
                        </div>
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
        <OfferCategories />
      </section>

      <div className="deals-coupon-list">
        <div className="container">
          <h3>Deals and Coupons</h3>
          <div className="dcl-inner">
            {coupons.length > 0 ? (
              coupons.map((coupon, index) => (
                <div
                  key={index}
                  className="dcl-block"
                  onClick={() => openModal(coupon)}
                  style={{ cursor: "pointer" }}
                >
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
                    </span>
                    <span className="dcl-overlay">Show Code</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No coupons available</p>
            )}
          </div>
        </div>
      </div>

      {showModal && selectedCoupon && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-content styled-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            <div className="modal-logo text-center">
              <img
                src={selectedCoupon.image}
                alt={selectedCoupon.title}
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>

            <h3 className="text-center my-3">Get Cashback at</h3>

            <hr />

            <div className="modal-details d-flex justify-content-between text-center mb-4">
              <div>
                <strong>Validity:</strong>
                <br />
                {selectedCoupon.validity || "Not Applicable"}
              </div>
              <div>
                <strong>Min spend:</strong>
                <br />
                {selectedCoupon.min_spend || "N/A"}
              </div>
              <div>
                <strong>Customer type:</strong>
                <br />
                {selectedCoupon.customer_type || "All Users"}
              </div>
            </div>

            <div className="coupon-code-box d-flex justify-content-center align-items-center mb-3">
              <input
                className="form-control code-input"
                value={
                  selectedCoupon.promo_code ||
                  selectedCoupon.coupon_code ||
                  "N/A"
                }
                readOnly
              />
              <button
                className="btn btn-primary copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText(
                    selectedCoupon.promo_code ||
                      selectedCoupon.coupon_code ||
                      ""
                  );
                }}
              >
                Copy Code
              </button>
            </div>

            <div className="text-center">
              <a
                href={selectedCoupon.store_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Go to Store
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CouponsDeal;
