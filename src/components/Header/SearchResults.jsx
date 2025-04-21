import React, { useEffect, useState, useCallback } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import debounce from "lodash/debounce";
import Footer from "../Footer/Footer";

function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");

  const fetchData = async (searchQuery) => {
    try {
      const res = await axios.get(
        `https://apitestpricemal.nodejsdapldevelopments.com/api/products`
      );
      const filtered = res.data.data.data.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setResults(filtered);
      setLoading(false);
    } catch (err) {
      console.error("Search failed:", err);
      setLoading(false);
    }
  };

  const debouncedFetch = useCallback(
    debounce((val) => {
      fetchData(val);
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(true);
    if (value.trim().length > 0) {
      debouncedFetch(value);
    } else {
      setSuggestions([]);
      setResults([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setShowSuggestions(false);
    navigate(`/search-results?query=${encodeURIComponent(name)}`);
    fetchData(name);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
      fetchData(searchTerm);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (query) {
      setSearchTerm(query);
      fetchData(query);
    }
  }, [query]);

  return (
    <>
      <header className="header-main">
        <div className="container">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-tab">
              <Link to="/" className="logo">
                <img src="assets/img/logo.png" alt="Logo" />
              </Link>
            </div>

            <div className="search-tab" style={{ position: "relative" }}>
              <div className="search-group">
                <input
                  type="text"
                  placeholder="Search price, deal & coupons"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button type="button" onClick={handleSearchClick}>
                  Search Now
                </button>
              </div>

              {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestion-list">
                  {suggestions.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleSuggestionClick(item.name)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="m-search">
              <a href="javascript:void(0);" className="m-search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
            <div className="button-tab d-flex align-items-center"></div>
          </div>
        </div>
      </header>

      <section className="top-banner inner d-flex align-items-center">
        <div className="container">
          <div className="banner-inner d-flex align-items-center justify-content-between">
            <div className="banner-content">
              <h1>Your Smart Shopping Assistant: Compare Before You Buy</h1>
            </div>
            <img src="assets/img/product-img.png" alt="Shopping Assistant" />
          </div>
        </div>
      </section>

      <div className="breadcrumb-tab">
        <div className="container">
          <p>
            <Link to="/">Home</Link>
            <i className="fa-solid fa-angle-right"></i>
            <span>Appliance</span>
          </p>
        </div>
      </div>

      <div className="container">
        <h2>Search Results for: "{query}"</h2>
        {loading ? (
          <p>Loading...</p>
        ) : results.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="product-grid">
            {results.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image_url} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.description?.slice(0, 100)}...</p>
                <p>Rating: {item.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default SearchResults;
