import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="legal-content">
        <h1>Privacy Policy for Pricemall</h1>
        <p>
          Welcome to Pricemal.com website ("we," "our," "us"). We are committed
          to protecting your privacy and ensuring that your personal information
          is handled securely and responsibly. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our product comparison website.
        </p>

        <div className="section">
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, and
              other contact details if voluntarily provided.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, IP
              address, device information, and browsing behavior.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              and similar technologies to enhance user experience and analyze
              website traffic.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>How We Use Your Information</h2>
          <p>
            We may use the collected information for the following purposes:
          </p>
          <ul>
            <li>To provide and improve our website services.</li>
            <li>
              To personalize user experience and deliver relevant content.
            </li>
            <li>To analyze website usage and trends.</li>
            <li>
              To communicate with you regarding inquiries, promotions, or
              updates.
            </li>
            <li>To ensure website security and prevent fraudulent activity.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Sharing of Information</h2>
          <p>
            We do not sell or rent personal information to third parties.
            However, we may share information with:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who help
              operate our website.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law or to
              protect our rights and safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of a merger, sale, or
              business restructuring.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies to enhance your browsing experience. You can manage
            your cookie preferences through your browser settings. Disabling
            cookies may affect certain website functionalities.
          </p>
        </div>

        <div className="section">
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for their privacy practices and encourage you to review
            their privacy policies before providing any information.
          </p>
        </div>

        <div className="section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no data transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="section">
          <h2>Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have rights regarding your
            personal information, including:
          </p>
          <ul>
            <li>Accessing, updating, or deleting your data.</li>
            <li>Opting out of marketing communications.</li>
            <li>Restricting data processing under certain conditions.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>
          <p>
            By using our website, you agree to the terms outlined in this
            Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
