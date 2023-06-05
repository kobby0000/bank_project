import React from 'react';
import "./contactSection.css";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <div>
         <div className="contact_section text_center">
          <p>Get In Touch</p>
          <p>Get in touch with our able team for more and detailed information.</p>
          <Link className="btn_main" to="/contact_us">Contact us</Link>
        </div>
    </div>
  )
}

export default ContactSection