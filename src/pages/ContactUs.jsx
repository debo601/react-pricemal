import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <section class="top-banner inner d-flex align-items-center">
        <div class="container">
          <div class="banner-inner d-flex align-items-center justify-content-between">
            <div class="banner-content">
              <h1>We have a deal for you!</h1>
              <h3>
                With 116,947 offers from 49,654 stores, we have a couponto save
                you an average of $21 on your next purchase
              </h3>
            </div>
            <img src="assets/img/contact-img.png" alt="" />
          </div>
        </div>
      </section>
      <section class="contact-sec">
        <div class="container">
          <div class="contact-inner d-flex align-items-center justify-content-between">
            <div class="ct-left">
              <div class="input-group">
                <div class="form-group">
                  <label for="">First name</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your first name"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="">Last name</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your last name"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="input-group">
                <div class="form-group">
                  <label for="">Email address</label>
                  <input
                    type="email"
                    name=""
                    placeholder="Enter email address"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="">Phone number</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter phone number"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="">Subject</label>
                <select name="" class="form-select">
                  <option value="">Select Subject</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Message</label>
                <textarea
                  name=""
                  class="form-control"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div class="input-group align-items-center">
                <button type="button" class="btn btn-primary">
                  Submit
                </button>
                <p class="terms-text">
                  All the fields are required. By sending the form you agree to
                  the <a href="">Terms & Conditions</a> and{" "}
                  <a href="">Privacy Policy</a>.
                </p>
              </div>
            </div>
            <div class="ct-right">
              <div class="ct-info">
                <h4>
                  Are you
                  <br /> interested to build
                  <br /> & grow your brand
                  <br /> with us?
                </h4>
                <p>
                  <span>
                    <img src="assets/img/mail.svg" alt="" />
                  </span>
                  Write to us at:
                  <a href="mailto:info@pricemal.com">info@pricemal.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
