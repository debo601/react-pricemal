import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("coupons :", coupons);

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/popular-coupons`;

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === "success") {
          console.log("response:", response);
          setCoupons(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coupons:", error);
        setLoading(false);
      }
    };

    fetchCoupons();
  }, []);

  const MAX_TITLE_LENGTH = 25;
  const MAX_DESC_LENGTH = 100;

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]+>/g, "");
  };

  return (
    <section className="top-coupons">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Top Coupons</h3>
          <Link to="/couponsdeal" className="view-all">
            View all
          </Link>
        </div>
        <div className="section-content">
          <div className="offers-list d-flex align-items-start flex-wrap">
            {loading ? (
              <p>Loading coupons...</p>
            ) : coupons.length > 0 ? (
              coupons.map((coupon) => (
                <div className="offer-block" key={coupon.id}>
                  <a href={coupon.link}>
                    <div className="offer-img">
                      <img src={coupon.store_logo} alt={coupon.name} />
                    </div>
                    <div className="offer-content">
                      <h3>
                        {coupon.title.length > MAX_TITLE_LENGTH
                          ? `${coupon.title.substring(0, MAX_TITLE_LENGTH)}...`
                          : coupon.title}
                      </h3>
                      {coupon.description ? (
                        <p>
                          {stripHtmlTags(coupon.description).length >
                          MAX_DESC_LENGTH
                            ? `${stripHtmlTags(coupon.description).substring(
                                0,
                                MAX_DESC_LENGTH
                              )}...`
                            : stripHtmlTags(coupon.description)}
                        </p>
                      ) : (
                        <p>No description available</p>
                      )}
                      <p>{coupon.offers_count} offers</p>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No coupons available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCoupons;
