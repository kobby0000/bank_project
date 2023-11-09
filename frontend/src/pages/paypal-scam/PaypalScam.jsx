import React from 'react';
import "./paypalScam.css";

function PaypalScam() {
    const protectionTips = [
        "Never click on suspicious links or download attachments from unknown sources.",
        "Double-check the sender's email address before responding to any PayPal-related emails.",
        "Enable two-factor authentication (2FA) for your PayPal account.",
        "Regularly monitor your account for unauthorized transactions.",
        "Educate yourself by reading our <a target='_blank' href='https://example.com/paypal-scam-article-1'>Scam Prevention Guide</a>."
      ];

  return (
    <div>
        <div className="scam-info container">
      <div className="showcase" 
    //   style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="showcase-content">
          <h1 className="info-title">Beware of PayPal Scam</h1>
          <p className="info-description">
            We care about your online security. Please be cautious of recent PayPal phishing scams. Protect your financial information and personal data.
          </p>
        </div>
      </div>
    </div>

    <section id='protection_main'>
    <div className="protection-tips container">
      <ul>
        {protectionTips.map((tip, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: tip }} />
        ))}
      </ul>
    </div>
    </section>
    </div>
  )
}

export default PaypalScam