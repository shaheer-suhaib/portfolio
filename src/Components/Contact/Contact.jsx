import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Icon from "../Icons/Icon";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="contact"
      className="contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="contact-title" variants={itemVariants}>
        <h1>Get in touch</h1>
      </motion.div>

      <div className="contact-section">
        <motion.div className="contact-left" variants={itemVariants}>
          <h1>Lets Talk</h1>
          <p>
            I am always open to discussing product design work or partnerships.
          </p>

          <div className="contact-details">
            {[
              { icon: "mail", text: "shaheersuhaib.pk@gmail.com" },
              { icon: "phone", text: "+92 3250368509" },
              { icon: "location", text: "PK, Islamabad" },
            ].map((detail, i) => (
              <motion.div
                key={i}
                className="contact-detail"
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="contact-icon">
                  <Icon name={detail.icon} size={24} />
                </span>
                <p>{detail.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="contact-right" variants={itemVariants}>
          <p className="contact-coming">
            Contact section integration coming soon.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              disabled
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              disabled
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              disabled
            />
            <motion.button type="submit" disabled>
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
