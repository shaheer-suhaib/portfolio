import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="" alt="---" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets Talk</h1>
          <p>
            I am always open to discussing product design work or partnerships.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="" alt="---->" />
              <p>shaheersuhaib.pk</p>
            </div>
            <div className="contact-detail">
              <img src="" alt="-->" />
              <p>1022312314</p>
            </div>
            <div className="contact-detail">
              <img src="" alt="-->" />
              <p>PK, Islamabad</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
