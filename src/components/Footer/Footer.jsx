import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="container">
          <div className="footer-inner d-flex align-items-start justify-content-between">
            <div className="footer-block">
              <Link to="/" className="footer-logo">
                <img src="assets/img/logo-white.png" alt="Pricemal logo" />
              </Link>
              <p>
                Pricemal aim to help consumers find the lowest prices on a wide
                range of products by comparing and choosing the best deal.
                Maximise savings and ensure to get the best possible value.
              </p>
            </div>
            <Link to="/" className="footer-block">
              <h3>Best Prices</h3>
              <ul>
                <li>
                  <Link to="">Computers</Link>
                </li>
                <li>
                  <Link to="">Electronics</Link>
                </li>
                <li>
                  <Link to="">Home & Garden</Link>
                </li>
                <li>
                  <Link to="">Clothing & Jewellery</Link>
                </li>
                <li>
                  <Link to="">Health & Beauty</Link>
                </li>
                <li>
                  <Link to="">Coupons</Link>
                </li>
                <li>
                  <Link to="">More</Link>
                </li>
              </ul>
            </Link>
            <div className="footer-block">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Blog</Link>
                </li>
                <li>
                  <Link to="">Product Review</Link>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <div className="newsletter-block">
                <h4>Subscribe to our Newsletter</h4>
                <div className="nw-form">
                  <input type="text" placeholder="Email address" />
                  <button type="submit" className="nw-btn">
                    Submit
                  </button>
                </div>
              </div>
              <div className="social-links">
                <Link to="">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link to="">
                  <i className="fa-brands fa-tiktok"></i>
                </Link>
                <Link to="">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
              <div className="email-info">
                <p>
                  <Link to="">
                    <i className="fa-solid fa-envelope"></i> Info@pricemal.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Disclaimer: All trademarks / logos / brands are the property of
              their respective owners. Due to technical constraints, Pricemal
              does not guarantee the accuracy of the information. or any errors
              in such information.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
