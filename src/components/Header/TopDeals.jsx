import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API requests

const TopDeals = () => {
  const [deals, setDeals] = useState([]); // State to hold the fetched deals
  const [loading, setLoading] = useState(true); // To track the loading state

  console.log(deals);

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/get-all-deals`;

  useEffect(() => {
    const fetchDeals = async () => {
      // Correcting the function declaration
      try {
        const response = await axios.get(API_URL); // Fetch data from the API
        if (response.data.status === "success") {
          setDeals(response.data.data); // Set the fetched data to the state
        }
        setLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.log("Error fetching deals:", error); // Handle error if any
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchDeals(); // Fetch the deals when the component mounts
  }, [API_URL]); // The dependency array ensures this runs only when API_URL changes

  return (
    <section className="store-directory bg-grey">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Top Deals</h3>
        </div>
        <div className="section-content">
          <div className="brand-list d-flex align-items-start flex-wrap">
            {loading ? (
              <p>Loading deals...</p> // Show loading message while data is being fetched
            ) : deals.length > 0 ? (
              deals.map((deal) => (
                <div className="brand-block" key={deal.id}>
                  <a href={deal.link}>
                    <img src={deal.image_url} alt={deal.name} />
                  </a>
                </div>
              ))
            ) : (
              <p>No deals available.</p> // Show if no deals are found
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
