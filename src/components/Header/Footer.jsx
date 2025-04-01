import React from 'react'

function Footer() {
  return (
    <footer className="footer-main">
    <div className="container">
      <div className="footer-inner d-flex align-items-start justify-content-between">
        <div className="footer-block">
          <a href="" className="footer-logo">
            <img src="assets/img/logo-white.png" alt="" />
          </a>
          <p>
            Pricemal aim to help consumers find the lowest prices on a wide
            range of products by comparing and choosing the best deal.
            Maximise savings and ensure to get the best possible value.
          </p>
        </div>
        <div className="footer-block">
          <h3>Best Prices</h3>
          <ul>
            <li>
              <a href="">Computers</a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Home & Garden</a>
            </li>
            <li>
              <a href="">Clothing & Jewellery</a>
            </li>
            <li>
              <a href="">Health & Beauty</a>
            </li>
            <li>
              <a href="">Coupons</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </div>
        <div className="footer-block">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Product Review</a>
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
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="email-info">
            <p>
              <a href="">
                <i className="fa-solid fa-envelope"></i> Info@pricemal.com
              </a>
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
  )
}

export default Footer