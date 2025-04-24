import React, { useState, useCallback } from "react";
import Categories from "./Categories";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import debounce from "lodash/debounce";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const fetchSuggestions = async (query) => {
    try {
      const res = await axios.get(
        `https://apitestpricemal.nodejsdapldevelopments.com/api/products`
      );
      const filtered = res.data.data.data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetch = useCallback(
    debounce((val) => {
      fetchSuggestions(val);
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      setShowSuggestions(true);
      debouncedFetch(value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setShowSuggestions(false);
    navigate(`/search-results?query=${encodeURIComponent(name)}`);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setShowSuggestions(false);
      navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div>
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                />
                <button type="button" onClick={handleSearch}>
                  Search Now
                </button>
              </div>

              {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestion-list">
                  {suggestions.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleSuggestionClick(item.slug)}
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

            <div className="button-tab d-flex align-items-center">
              <Categories />
              <div className="coupon-tab">
                <Link to="/couponsdeal" className="btn btn-primary">
                  Coupon & Deals
                </Link>
                <div className="coupon-menu">
                  <ul>
                    <li>
                      <a href="">Mobile Phones</a>
                    </li>
                    <li>
                      <a href="">Mobile Phones Accessories</a>
                    </li>
                    <li>
                      <a href="">Tablets</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
