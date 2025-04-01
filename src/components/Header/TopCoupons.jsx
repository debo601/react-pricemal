import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests

const TopCoupons = () => {
  const [coupons, setCoupons] = useState([]); // State to store coupon data
  const [loading, setLoading] = useState(true); // To track loading state

  // URL for the API to fetch coupons (replace with actual URL)
  const API_URL = `${process.env.REACT_APP_BASE_URL}api/get-all-coupons`;

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get(API_URL); // Fetch data from the API
        if (response.data.status === "success") {
          setCoupons(response.data.data); // Set coupon data to state
        }
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching coupons:", error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchCoupons(); // Call the function to fetch data when the component mounts
  }, [API_URL]);

  return (
    <section className="top-coupons">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Top Coupons</h3>
          <a href="#" className="btn btn-secondary">
            View all
          </a>
        </div>
        <div className="section-content">
          <div className="offers-list d-flex align-items-start flex-wrap">
            {loading ? (
              <p>Loading coupons...</p> // Show loading message while fetching
            ) : coupons.length > 0 ? (
              coupons.map((coupon) => (
                <div className="offer-block" key={coupon.id}>
                  <a href={coupon.link}>
                    <div className="offer-img">
                      <img src={coupon.image_url} alt={coupon.name} />
                    </div>
                    <div className="offer-content">
                      <h3>{coupon.name}</h3>
                      <p>{coupon.offers_count} offers</p>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No coupons available at the moment.</p> // If no coupons are returned
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCoupons;
