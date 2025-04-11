import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InstantCompare.css";

const InstantCompare = () => {
  const [allSubcategories, setAllSubcategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://apitestpricemal.nodejsdapldevelopments.com/api/categories-with-subcategories"
        );

        if (res.data.success && res.data.data) {
          const result = res.data.data.flatMap((category) =>
            (category.subcategories || []).map((sub) => ({
              ...sub,
              parentSlug: category.slug,
            }))
          );
          console.log("Fetched subcategories:", result);
          setAllSubcategories(result);
        }
      } catch (err) {
        console.error("Failed to fetch subcategories", err);
      }
    };

    fetchCategories();
  }, []);

  // Only show subcategories with is_show === 1 by default
  const defaultVisible = allSubcategories
    .filter((sub) => sub.is_show === 1)
    .slice(0, 12);

  const visibleSubcategories = showAll ? allSubcategories : defaultVisible;

  return (
    <section className="instant-compare">
      <div className="container">
        <div className="section-title-top d-flex align-items-center justify-content-between">
          <h3>Maximum Savings: Compare Price Instantly</h3>
          {allSubcategories.length > 12 && (
            <button
              className="view-all"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          )}
        </div>

        <div className="section-content">
          <div className="quickblock-list d-flex align-items-center flex-wrap">
            {visibleSubcategories.map((sub) => (
              <div className="quick-block" key={sub.id}>
                <a href={`/category/${sub.parentSlug}/${sub.slug}`}>
                  <div className="img-block">
                    <img
                      src={`https://apitestpricemal.nodejsdapldevelopments.com/storage/${sub.image}`}
                      alt={sub.name}
                    />
                  </div>
                  <h4>{sub.name}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantCompare;
