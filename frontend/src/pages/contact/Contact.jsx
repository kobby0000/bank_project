import React from 'react';
import "./contact.css"

function Contact() {
  return (
    <div id='contact-main'>
      <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Please fill out the form below:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact