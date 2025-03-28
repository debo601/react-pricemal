import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
// import Categories from "../components/Header/Categories";

function CouponsDeal() {
  return (
    <>
      <Header />
      <section className="top-banner inner d-flex align-items-center">
        <div className="container">
          <div className="banner-inner d-flex align-items-center justify-content-between">
            <div className="banner-content">
              <h1>Unlock Incredible Savings with Every Deal!</h1>
            </div>
            <img src="assets/img/coupon-deal.png" alt="" />
          </div>
        </div>
      </section>
      <div className="breadcrumb-tab">
        <div className="container">
          <p>
            <Link to="/">Home</Link>
            <i className="fa-solid fa-angle-right"></i>
            <Link to="/couponsdeal">Coupon & Deal</Link>
          </p>
        </div>
      </div>

      <section className="coupon-deal-sec">
        <div className="container">
          <div className="cd-btnset d-flex align-items-center justify-content-center">
            <Link to="" className="btn btn-primary">
              Coupon
            </Link>
            <Link to="" className="btn btn-primary">
              Deal
            </Link>
          </div>
          <div className="store-offers-main">
            <h3>Stores having offers</h3>
            <div className="store-offer-slider d-flex align-items-start">
              <div className="store-offer-block">
                <div className="so-inner">
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="store-offer-block">
                <div className="so-inner">
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="store-offer-block">
                <div className="so-inner">
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="store-offer-block">
                <div className="so-inner">
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="store-offer-block">
                <div className="so-inner">
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="so-block">
                    <Link to="">
                      <div className="so-logo">
                        <img src="assets/img/amazon.png" alt="" />
                      </div>
                      <div className="so-link">
                        <span>
                          <i className="fa-solid fa-tag"></i> coupons and deal
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="offer-category-main">
        <div className="container">
          <h3>Categories </h3>
          <div className="offer-cat-slider d-flex align-items-center justify-content-between">
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-1.svg" alt="" />
                </div>
                <p>Top 20 Promo code</p>
              </Link>
            </div>
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-2.svg" alt="" />
                </div>
                <p>Beauty & health</p>
              </Link>
            </div>
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-3.svg" alt="" />
                </div>
                <p>Fashion</p>
              </Link>
            </div>
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-4.svg" alt="" />
                </div>
                <p>Home & living</p>
              </Link>
            </div>
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-5.svg" alt="" />
                </div>
                <p>Sports & outdoors</p>
              </Link>
            </div>
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-6.svg" alt="" />
                </div>
                <p>Travel & hotels</p>
              </Link>
            </div>
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-7.svg" alt="" />
                </div>
                <p>Electronics</p>
              </Link>
            </div>
            <div className="oc-slider-block">
              <Link to="">
                <div className="ct-img">
                  <img src="assets/img/ct-8.svg" alt="" />
                </div>
                <p>Others</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="deals-coupon-list">
        <div className="container">
          <h3>Deals and Coupons</h3>
          <div className="dcl-inner">
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Deal</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Deal</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Deal</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Deal</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Deal</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Deal</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Coupon</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-coupon">
                  <span className="dcl-code">AMZN6545654C25</span>
                  <span className="dcl-overlay">Show Code</span>
                </div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
            <div className="dcl-block">
              <Link to="">
                <div className="dcl-tag">
                  <span>Code</span>
                </div>
                <div className="dcl-img">
                  <img src="assets/img/amazon.png" alt="" />
                </div>
                <p>5% Cashback for Amazon Prime Card</p>
                <div className="dcl-link-deal">Get Deal</div>
              </Link>
            </div>
          </div>
          <div className="pagination-tab d-flex align-items-center justify-content-center">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa-solid fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="qa-sec">
        <div className="container">
          <h3>Questions and answer about dishwasher</h3>
          <div className="qa-list">
            <div className="sgl-qa-block active">
              <div className="sgl-qa-title">
                <h4>What is coupon?</h4>
              </div>
              <div className="sgl-qa-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  lobortis turpis vel diam tincidunt tempor. Nullam consequat
                  quam sed ante eleifend, quis ultricies magna pretium. Nam id
                  ante nibh. Pellentesque varius risus quis interdum tempor.
                  Etiam gravida ex non rhoncus volutpat. Aliquam a quam
                  suscipit, semper neque id, placerat dui.
                </p>
              </div>
            </div>
            <div className="sgl-qa-block">
              <div className="sgl-qa-title">
                <h4>How do I use coupon code?</h4>
              </div>
              <div className="sgl-qa-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  lobortis turpis vel diam tincidunt tempor. Nullam consequat
                  quam sed ante eleifend, quis ultricies magna pretium. Nam id
                  ante nibh. Pellentesque varius risus quis interdum tempor.
                  Etiam gravida ex non rhoncus volutpat. Aliquam a quam
                  suscipit, semper neque id, placerat dui.
                </p>
              </div>
            </div>
            <div className="sgl-qa-block">
              <div className="sgl-qa-title">
                <h4>Where can I find coupon codes?</h4>
              </div>
              <div className="sgl-qa-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  lobortis turpis vel diam tincidunt tempor. Nullam consequat
                  quam sed ante eleifend, quis ultricies magna pretium. Nam id
                  ante nibh. Pellentesque varius risus quis interdum tempor.
                  Etiam gravida ex non rhoncus volutpat. Aliquam a quam
                  suscipit, semper neque id, placerat dui.
                </p>
              </div>
            </div>
            <div className="sgl-qa-block">
              <div className="sgl-qa-title">
                <h4>Why isn't my coupon code working?</h4>
              </div>
              <div className="sgl-qa-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  lobortis turpis vel diam tincidunt tempor. Nullam consequat
                  quam sed ante eleifend, quis ultricies magna pretium. Nam id
                  ante nibh. Pellentesque varius risus quis interdum tempor.
                  Etiam gravida ex non rhoncus volutpat. Aliquam a quam
                  suscipit, semper neque id, placerat dui.
                </p>
              </div>
            </div>
            <div className="sgl-qa-block">
              <div className="sgl-qa-title">
                <h4>Can I use more than one coupon code at time?</h4>
              </div>
              <div className="sgl-qa-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  lobortis turpis vel diam tincidunt tempor. Nullam consequat
                  quam sed ante eleifend, quis ultricies magna pretium. Nam id
                  ante nibh. Pellentesque varius risus quis interdum tempor.
                  Etiam gravida ex non rhoncus volutpat. Aliquam a quam
                  suscipit, semper neque id, placerat dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CouponsDeal;
