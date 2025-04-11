import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(`base url:`, BASE_URL);
  const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}api/categories-with-subcategories`) 
      .then((response) => {
        console.log("API Response:", response.data);

        if (response.data.data && Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
          console.error("Invalid API response format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, [BASE_URL]);

  return (
    <div className="category-tab">
      <button
        className="btn btn-secondary"
        onClick={() => setIsVisible(!isVisible)}
      >
        All Categories
      </button>

      <div className={`cat-menu ${isVisible ? "show" : ""}`}>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )
              }
            >
              <a href="#">
                <div className="cat-img">
                  <img
                    src={
                      category.logo
                        ? `${STORAGE_URL}${category.logo}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={category.name}
                  />
                </div>
                {category.name}
              </a>

            
              {selectedCategory === category.id && category.subcategories && (
                <ul className="subcategory-list">
                  {category.subcategories.length > 0 ? (
                    category.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <a href={`/${sub.slug}`}>
                          <img
                            src={`${STORAGE_URL}${sub.image}`}
                            alt={sub.name}
                            width="30"
                            height="30"
                          />
                          {sub.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>No subcategories available</li>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
