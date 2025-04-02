import React, { useState, useEffect } from "react";
import axios from "axios";

const PopularBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/get-all-brands`;
  const IMAGE_BASE_URL = process.env.REACT_APP_BASE_URL; // Check if this is correct

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === "success") {
          setBrands(response.data.data);
          console.log("Brands Data:", response.data.data); // Debugging
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, [API_URL]);

  return (
    <section className="popular-brands">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Popular Brands</h3>
          <a href="/brands" className="btn btn-secondary">
            View all
          </a>
        </div>
        <div className="section-content">
          <div className="brand-list d-flex align-items-start flex-wrap">
            {loading ? (
              <p>Loading...</p>
            ) : brands.length > 0 ? (
              brands.map((brand) => {
                // Construct correct image URL
                const imageUrl = `${IMAGE_BASE_URL}/storage/${brand.logo}`;
                console.log("Image URL:", imageUrl); // Debugging

                return (
                  <div className="brand-block" key={brand.id}>
                    <a href={`/brand/${brand.slug}`}>
                      <img
                        src={imageUrl}
                        alt={brand.name}
                        className="brand-logo"
                        onError={(e) => {
                          e.target.src = "/images/default-brand.png"; // Fallback image
                        }}
                      />
                    </a>
                  </div>
                );
              })
            ) : (
              <p>No brands available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
