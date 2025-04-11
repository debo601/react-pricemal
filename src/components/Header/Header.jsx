import React, { useState } from "react";
import Categories from "./Categories";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
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

            <div className="search-tab">
              <div className="search-group">
                <input
                  type="text"
                  placeholder="Search price, deal & coupons"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                />
                <button type="button" onClick={handleSearch}>
                  Search Now
                </button>
              </div>
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
                    <li><a href="">Mobile Phones</a></li>
                    <li><a href="">Mobile Phones Accessories</a></li>
                    <li><a href="">Tablets</a></li>
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
