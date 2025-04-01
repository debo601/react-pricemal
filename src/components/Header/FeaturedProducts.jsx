import React, { useState, useEffect } from "react";
import axios from "axios"; // Importing axios
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // To track the loading state

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/featured-products`; // The API URL
  console.log("Constructed API URL:", API_URL);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Using axios to get data from the API
        const response = await axios.get(API_URL);

        console.log("API response data:", response.data); // For debugging

        // Check if the response contains product data and update the state accordingly
        if (response.data.status === "success" && response.data.data) {
          setProducts(response.data.data); // Set the product data correctly
        } else {
          setProducts([]); // If no data or not a success status
        }
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, [API_URL]); // The dependency array, ensures the effect runs only once

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {loading ? (
          <p>Loading products...</p> // Show loading message while fetching
        ) : products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image_url} // Use the correct image URL
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <a href={product.slug} className="btn">
                Buy Now
              </a>
              <button className="btn compare">
                Compare Price
              </button>
            </div>
          ))
        ) : (
          <p>No featured products available at the moment.</p> // If no products are returned
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;