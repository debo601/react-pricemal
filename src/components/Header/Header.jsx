import React from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
// import Categories from "./Categories";

function Header() {
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
                <input type="text" placeholder="Search price, deal & coupons" />
                <button type="button">Search Now</button>
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
                {/* <button className="btn btn-primary">Coupon & Deals</button> */}
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
