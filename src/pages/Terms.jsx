import React from "react";
// import "../pages/Terms.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Terms() {
  return (
    <>
      <Header />
      <div className="terms-container">
        <h1>Terms and Conditions for Pricemall</h1>
        <p>
          Welcome to Pricemal.com (“we,” “our,” or “us”). By accessing and using
          our product comparison website, you agree to be bound by these Terms
          and Conditions. If you do not agree with any part of these terms,
          please do not use our website.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using Pricemal.com, you acknowledge that you have read, understood,
          and agree to comply with these Terms and Conditions, along with our
          Privacy Policy.
        </p>

        <h2>2. Use of the Website</h2>
        <ul>
          <li>
            You must be at least 18 years old or have legal parental/guardian
            consent to use our website.
          </li>
          <li>You agree to use the website for lawful purposes only.</li>
          <li>
            You will not engage in any activity that disrupts or interferes with
            the website’s operation.
          </li>
        </ul>

        <h2>3. Information Accuracy & Availability</h2>
        <ul>
          <li>
            We strive to provide accurate product comparisons, but we do not
            guarantee the completeness, accuracy, or reliability of the
            information.
          </li>
          <li>
            Prices, features, and availability of products are subject to change
            without notice. We are not responsible for any discrepancies between
            our listings and third-party sellers.
          </li>
        </ul>

        <h2>4. Third-Party Links & Affiliate Disclosure</h2>
        <ul>
          <li>
            Our website may contain links to third-party websites. These links
            are provided for convenience and do not imply our endorsement of
            their content, policies, or services.
          </li>
          <li>
            We may earn commissions from affiliate links when users purchase
            products through our website, but this does not influence our
            objectivity in comparisons.
          </li>
        </ul>

        <h2>5. Intellectual Property Rights</h2>
        <ul>
          <li>
            All content on this website, including text, images, graphics, and
            logos, is the property of Pricemal.com or its licensors and is
            protected under copyright and intellectual property laws.
          </li>
          <li>
            You may not copy, reproduce, distribute, or modify any content from
            our website without prior written permission.
          </li>
        </ul>

        <h2>6. User Conduct</h2>
        <p>By using our website, you agree not to:</p>
        <ul>
          <li>Post false, misleading, or harmful information.</li>
          <li>
            Attempt to hack, disrupt, or gain unauthorized access to our
            website.
          </li>
          <li>
            Use automated bots or scripts to collect data from our website.
          </li>
        </ul>

        <h2>7. Limitation of Liability</h2>
        <ul>
          <li>
            We provide our website "as is" without warranties of any kind.
          </li>
          <li>
            We are not liable for any direct, indirect, or consequential damages
            arising from your use of the website, including but not limited to
            financial loss, data loss, or business interruptions.
          </li>
          <li>
            We are not responsible for any disputes between users and
            third-party vendors.
          </li>
        </ul>

        <h2>8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to our website at
          our discretion if we believe a user has violated these Terms and
          Conditions.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We may update these Terms and Conditions at any time. Changes will be
          posted on this page, and continued use of our website after changes
          indicates acceptance of the revised terms.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
