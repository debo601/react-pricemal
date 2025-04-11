import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubcategoryPage = () => {
  const { parentSlug, subcategorySlug } = useParams();
  const [subcategoryData, setSubcategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcategory = async () => {
      try {
        const response = await axios.get(
          "https://apitestpricemal.nodejsdapldevelopments.com/api/categories-with-subcategories"
        );

        const data = response.data.data;

        // Find the subcategory by slug
        const matchedSubcategory = data
          .flatMap((category) => {
            return (category.subcategories || []).map((sub) => ({
              ...sub,
              parentSlug: category.slug,
              parentName: category.name,
            }));
          })
          .find(
            (sub) =>
              sub.parentSlug === parentSlug && sub.slug === subcategorySlug
          );

        if (matchedSubcategory) {
          setSubcategoryData(matchedSubcategory);
        } else {
          console.warn("Subcategory not found");
        }
      } catch (err) {
        console.error("Error fetching subcategory data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategory();
  }, [parentSlug, subcategorySlug]);

  if (loading) {
    return <div>Loading subcategory data...</div>;
  }

  if (!subcategoryData) {
    return <div>Subcategory not found.</div>;
  }

  return (
    <div className="subcategory-page">
      <h2>Subcategory: {subcategoryData.name}</h2>
      <img
        src={`https://apitestpricemal.nodejsdapldevelopments.com/storage/${subcategoryData.image}`}
        alt={subcategoryData.name}
        style={{ width: "200px", height: "auto", marginBottom: "1rem" }}
      />
      <p>
        <strong>Slug:</strong> {subcategoryData.slug}
      </p>
      <p>
        <strong>Parent Category:</strong> {subcategoryData.parentName}
      </p>
    </div>
  );
};

export default SubcategoryPage;
  