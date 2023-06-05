import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import phone_icon from "../../assets/images/phone_icon.png";
import location_icon from "../../assets/images/location_icon.png";


function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="footer_wrapper container">
          <div className="top">
            <div className="left">
              <img src={logo} alt="Slick Union Bank Logo" />
              <p>The financial institution you can trust for life.</p>
            </div>
            <div className="middle">
              <ul>
                <li>Menu</li>
                <li><a className="footer_menu" href="/about">About Us</a></li>
                <li><a className="footer_menu" href="/complaints">Complaint</a></li>
                <li><a className="footer_menu" href="/faq">FAQ</a></li>
                <li><a className="footer_menu" href="/contact_us">Contact Us</a></li>
              </ul>
            </div>
            <div className="right">
              <p>GET IN TOUCH</p>
              <div className="contact">
                <img src={phone_icon} alt="phone number" />
                <p>+45 556 5425</p>
              </div>
              <div className="contact">
                <img src={location_icon} alt="location" />
                <p>A153 Apartment 26, Gaza Street - Colorado</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="divider"></div>

            <div className="main">
            <div className="left">
              <p>Copyright© {new Date().getFullYear()}</p>
            </div>
            <div className="right">
              <a href="/terms&condistions">Terms & Conditions</a>
              <a href="/privacy&policy">Privacy & Plolicy</a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
