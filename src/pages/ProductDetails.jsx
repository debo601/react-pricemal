import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          `https://apitestpricemal.nodejsdapldevelopments.com/api/product-by-slug/${slug}`
        );
        setProduct(res.data?.product || null);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    }

    fetchProduct();
  }, [slug]); 

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img
        src={product.images?.[0]?.image_link}
        alt={product.name}
        style={{ maxWidth: "100%", objectFit: "contain" }}
      />
      <p>{product.description}</p>
      <p>Rating: {product.rating}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetails;
