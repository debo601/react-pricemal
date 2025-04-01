import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios to make API requests

const PopularBrands = () => {
  const [brands, setBrands] = useState([]); // State to store fetched brand data
  const [loading, setLoading] = useState(true); // State to track loading

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/get-all-deals`; // The API endpoint for fetching brand data

  // useEffect hook to fetch brand data when component mounts
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(API_URL); // Make the GET request to fetch brand data
        if (response.data.status === "success") {
          setBrands(response.data.data); // Set the brand data in the state
        }
        setLoading(false); // Stop loading once the data is fetched
      } catch (error) {
        console.log("Error fetching brands:", error); // Log error if request fails
        setLoading(false); // Stop loading in case of an error
      }
    };

    fetchBrands(); // Call the fetchBrands function
  }, [API_URL]); // Dependency array ensures this runs only once when the component mounts

  return (
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
            {loading ? (
              <p>Loading...</p> // Show loading text while data is being fetched
            ) : brands.length > 0 ? (
              brands.map((brand) => (
                <div className="brand-block" key={brand.id}>
                  <a href={brand.link}>
                    <img src={brand.image_url} alt={brand.name} />
                  </a>
                </div>
              ))
            ) : (
              <p>No brands available.</p> // Show message if no brands are fetched
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
