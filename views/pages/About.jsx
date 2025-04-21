import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const beige = "#F5F1EA";
  const deepBrown = "#4A3F35";
  const buttonBeige = "#D2B48C";
  const buttonHoverBeige = "#C4A484";
  const secondaryBeige = "#FAF0E6";

  const containerStyle = {
    backgroundColor: beige,
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
    color: deepBrown,
  };

  const sectionStyle = {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    '@media (maxWidth: 768px)': {
      padding: "40px 15px",
    },
  };

  const teamCardStyle = {
    backgroundColor: secondaryBeige,
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    '@media (maxWidth: 768px)': {
      marginBottom: "20px",
    },
  };

  const buttonStyle = {
    backgroundColor: buttonBeige,
    color: deepBrown,
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  // Sample team members
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: "https://i.pinimg.com/474x/de/9f/40/de9f40b39a820dfecc11be18b8cdb28f.jpg",
    },
    {
      name: "John Smith",
      role: "Lead Designer",
      image: "https://i.pinimg.com/474x/42/50/38/425038fa04710912ac6abc133fbb300b.jpg",
    },
    {
      name: "Emily Brown",
      role: "Marketing Director",
      image: "https://i.pinimg.com/474x/98/69/5c/98695c6d18685e9148c80bbb956242a1.jpg",
    },
  ];

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <motion.section
        style={{
          ...sectionStyle,
          backgroundImage: "url('https://i.pinimg.com/736x/b9/83/fe/b983fed4a03979c077b3ed519c97d64c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          paddingTop: "120px",
          paddingBottom: "100px",
          color: "white",
          position: "relative",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: deepBrown,
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#7D6E5E",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Discover the story behind our brand and our passion for creating timeless fashion.
        </p>
      </motion.section>

      {/* Brand Story Section */}
      <motion.section
        style={{
          ...sectionStyle,
          display: "flex",
          alignItems: "center",
          gap: "40px",
          '@media (maxWidth: 768px)': {
            flexDirection: "column",
          },
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: deepBrown,
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#7D6E5E",
              lineHeight: "1.6",
            }}
          >
            Founded in 2020, our brand was born from a desire to blend elegance with sustainability. We believe in crafting clothing that not only looks good but also feels good, using eco-friendly materials and ethical production practices. Our journey began with a small collection of timeless pieces, and today, we’re proud to offer a wide range of apparel that celebrates individuality and style.
          </p>
        </div>
        <img
          src="https://i.pinimg.com/736x/4e/1e/3d/4e1e3d62f27ff29a43e345788dab6161.jpg"
          alt="Brand Story"
          style={{
            width: "50%",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            '@media (maxWidth: 768px)': {
              width: "100%",
            },
          }}
        />
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        style={{
          ...sectionStyle,
          backgroundColor: secondaryBeige,
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: deepBrown,
          }}
        >
          Our Mission & Vision
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#7D6E5E",
            maxWidth: "800px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
          }}
        >
          Our mission is to empower individuals through fashion that is sustainable, inclusive, and timeless. We envision a world where style and responsibility go hand in hand, creating a positive impact on both people and the planet.
        </p>
        <Link to="/sustainability">
          <motion.button
            style={buttonStyle}
            whileHover={{ scale: 1.05, backgroundColor: buttonHoverBeige }}
            whileTap={{ scale: 0.95 }}
            aria-label="Learn more about sustainability"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.section>

      {/* Team Section */}
      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "40px",
            textAlign: "center",
            color: deepBrown,
          }}
        >
          Meet Our Team
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              style={teamCardStyle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: deepBrown,
                }}
              >
                {member.name}
              </h3>
              <p style={{ color: "#7D6E5E" }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Footer Section */}
      <section
        style={{
          ...sectionStyle,
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: deepBrown,
          color: beige,
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Join Our Fashion Community
        </h2>
        <Link to="/shop">
          <motion.button
            style={{
              ...buttonStyle,
              backgroundColor: beige,
              color: deepBrown,
            }}
            whileHover={{ scale: 1.05, backgroundColor: buttonHoverBeige }}
            whileTap={{ scale: 0.95 }}
            aria-label="Shop now"
          >
            Shop Now
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default About;