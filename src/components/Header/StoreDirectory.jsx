import React, { useEffect, useState } from "react";
import axios from "axios";
const TopDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/get-all-stores`;

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === "success") {
          setDeals(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.log("Error fetching deals:", error);
        setLoading(false);
      }
    };

    fetchDeals();
  }, [API_URL]);

  return (
    <section className="store-directory bg-grey">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Store Directory</h3>``
        </div>
        <div className="section-content">
          <div className="brand-list d-flex align-items-start flex-wrap">
            {loading ? (
              <p>Loading deals...</p>
            ) : deals.length > 0 ? (
              deals.map((deal) => (
                <div className="brand-block" key={deal.id}>
                  <a href={deal.link}>
                    <img src={deal.logo} alt={deal.title} />
                  </a>
                </div>
              ))
            ) : (
              <p>No deals available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
