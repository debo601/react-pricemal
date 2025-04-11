import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const API_URL = `${process.env.REACT_APP_BASE_URL}api/featured-products`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === "success" && response.data.data) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [API_URL]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="featured-products">
      <div className="top-bar">
        <h2>Featured Products</h2>
        <div className="controls">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="arrow"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="arrow"
          >
            <FaArrowRight />
          </button>
          <a href="#" className="view-all">
            View all
          </a>
        </div>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <Slider {...settings} ref={sliderRef}>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image_url} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                from <strong>₹{product.price}</strong>
              </p>
              <a href={product.slug} className="btn buy-now">
                Buy Now
              </a>
              <button className="btn compare">Compare Price</button>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default FeaturedProducts;
