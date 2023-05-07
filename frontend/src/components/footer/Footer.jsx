import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="footer_wrapper container">
          <div className="top">
          <div className="left">
            <img src="" alt="Slick Union Bank Logo" />
            <p>The financial institution you can trust for life.</p>
          </div>
          <div className="middle">
            <ul>
              <li>Menu</li>
              <li>About Us</li>
              <li>Complaint</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="right">
            <p>GET IN TOUCH</p>
            <div>
              <img src="" alt="" />
              <p>+45 556 5425</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>A153  Apartment 26,
Gaza Street -
Colorado</p>
            </div>

          </div>
          </div>
          <div className="bottom">
            <div className="left">
              <p>Copyright 2023</p>
            </div>
            <div className="right">
              <a href="/">Terms & Conditions</a>
              <a href="/">Privacy & Plolicy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer