import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./PopularProduct.css";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/featured-products`; // The API URL
  console.log("Constructed API URL:", API_URL);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log("API response data:", response.data); 

      
        if (response.data.status === "success" && response.data.data) {
          setProducts(response.data.data); 
        } else {
          setProducts([]); 
        }
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching products:", error); 
        setLoading(false); 
      }
    };

    fetchProducts(); 
  }, [API_URL]); 

  return (
    <section className="popular-product bg-grey">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Compare Price on Popular Products</h3>
          <a href="#" className="view-all">
            View all
          </a>
        </div>
        <div className="section-content">
          <div className="feature-slider d-flex align-items-center">
            {loading ? (
              <p>Loading products...</p> 
            ) : products.length > 0 ? (
              products.map((product) => (
                <div className="product-block" key={product.id}>
                  <div className="product-img">
                    <img
                      src={product.image_url} 
                      alt={product.name}
                    />
                  </div>
                  <div className="product-title">{product.name}</div>
                  <div className="product-price">
                    from <span>S${product.price}</span>
                  </div>
                  <div className="product-btns d-flex align-items-center flex-column">
                    <a
                      href={`/product/${product.slug}`}
                      className="btn btn-secondary"
                    >
                      Buy Now
                    </a>
                    <a
                      href={`/compare/${product.slug}`}
                      className="btn btn-primary"
                    >
                      Compare Price
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No popular products available at the moment.</p> 
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
