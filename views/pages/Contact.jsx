import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const Contact = () => {
  const containerStyle = {
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
    color: "#4A3F35",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#F5F1EA",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    padding: "12px",
    border: "1px solid #4A3F35",
    borderRadius: "8px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#D2B48C",
    color: "#4A3F35",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  const mapStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "12px",
    marginTop: "40px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header style={headerStyle}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We'd love to hear from you! Please fill out the form below.
        </motion.p>
      </header>

      <motion.form
        style={formStyle}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={inputStyle}
          required
          aria-label="Your Name"
        />
        <input
          type="email"
          placeholder="Your Email"
          style={inputStyle}
          required
          aria-label="Your Email"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          style={{ ...inputStyle, resize: "none" }}
          required
          aria-label="Your Message"
        ></textarea>
        <motion.button
          type="submit"
          style={buttonStyle}
          whileHover={{ scale: 1.05, backgroundColor: "#C4A484" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153168!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b9f8f8f8f8!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1614641234567!5m2!1sen!2sau"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      ></motion.iframe>
    </motion.div>
  );
};

export default Contact;