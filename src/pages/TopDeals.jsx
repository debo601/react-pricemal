import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("deals:", deals);
  const API_URL = `${process.env.REACT_APP_BASE_URL}api/popular-deals`;

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === "success") {
          setDeals(response.data.data);
        }
      } catch (error) {
        console.log("Error fetching deals : ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  const MAX_TITLE_LENGTH = 25;
  const MAX_DESC_LENGTH = 100;

  return (
    <section className="top-deals">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Top Deals</h3>
          <a href="" className="btn btn-secondary">
            View all
          </a>
        </div>
        <div className="section-content">
          <div className="offers-list d-flex align-items-start flex-wrap">
            {loading ? (
              <p>Loading deals...</p>
            ) : deals.length > 0 ? (
              deals.map((deal) => (
                <div className="offer-block" key={deal.id}>
                  <a href="#">
                    <div className="offer-img">
                      <img src={deal.store_logo} alt={deal.title} />
                    </div>
                    <div className="offer-content">
                      <h3>
                        {deal.title.length > MAX_TITLE_LENGTH
                          ? `${deal.title.substring(0, MAX_TITLE_LENGTH)}...`
                          : deal.title}
                      </h3>
                      {deal.description ? (
                        <p>
                          {deal.description.length > MAX_DESC_LENGTH
                            ? `${deal.description.substring(
                                0,
                                MAX_DESC_LENGTH
                              )}...`
                            : deal.description}
                        </p>
                      ) : (
                        <p>No description available</p>
                      )}
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No deals available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
