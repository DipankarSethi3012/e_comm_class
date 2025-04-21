import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BlogDetail from "./BlogDetail";
const Blog = () => {
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
  };

  const blogCardStyle = {
    backgroundColor: secondaryBeige,
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  const blogImageStyle = {
    width: "40%",
    objectFit: "cover",
  };

  const blogContentStyle = {
    padding: "20px",
    flex: 1,
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

  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Fashion Trends for 2025",
      excerpt: "Discover the latest trends in clothing and accessories to elevate your wardrobe this year.",
      image: "https://i.pinimg.com/736x/d6/bc/ce/d6bcce4be1856a743ff29adca04d49ac.jpg",
      date: "April 10, 2025",
    },
    {
      id: 2,
      title: "How to Style a Capsule Wardrobe",
      excerpt: "Learn how to create a versatile wardrobe with just a few key pieces.",
      image: "https://i.pinimg.com/474x/3c/54/24/3c54247d6f09356674c3bcc4d9099d3e.jpg",
      date: "April 5, 2025",
    },
    {
      id: 3,
      title: "Sustainable Fashion: Why It Matters",
      excerpt: "Explore eco-friendly clothing options and their impact on the planet.",
      image: "https://i.pinimg.com/474x/28/11/b1/2811b1359f8274024d64f5f296fdff9b.jpg",
      date: "March 28, 2025",
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
          paddingTop: "100px",
          paddingBottom: "80px",
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
          Fashion Insights & Trends
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#7D6E5E",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Stay updated with the latest fashion tips, styling guides, and industry trends from our experts.
        </p>
      </motion.section>

      {/* Blog Posts Section */}
      <section style={sectionStyle}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "40px",
            textAlign: "center",
            color: deepBrown,
          }}
        >
          Latest Articles
        </h2>
        <AnimatePresence>
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              style={blogCardStyle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: post.id * 0.1 }}
            >
              <img src={post.image} alt={post.title} style={blogImageStyle} />
              <div style={blogContentStyle}>
                <span style={{ fontSize: "0.9rem", color: "#7D6E5E" }}>
                  {post.date}
                </span>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: "10px 0",
                    color: deepBrown,
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ color: "#7D6E5E", marginBottom: "20px" }}>
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`}>
                  <motion.button
                    style={buttonStyle}
                    whileHover={{ scale: 1.05, backgroundColor: buttonHoverBeige }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Newsletter Section */}
      <motion.section
        style={{
          ...sectionStyle,
          backgroundColor: secondaryBeige,
          textAlign: "center",
          padding: "60px 20px",
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
          Subscribe to Our Newsletter
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#7D6E5E",
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          Get the latest fashion updates and exclusive offers delivered to your inbox.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "12px",
              border: `1px solid ${deepBrown}`,
              borderRadius: "8px",
              fontSize: "1rem",
              width: "300px",
              maxWidth: "100%",
            }}
            aria-label="Email address"
          />
          <motion.button
            style={buttonStyle}
            whileHover={{ scale: 1.05, backgroundColor: buttonHoverBeige }}
            whileTap={{ scale: 0.95 }}
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </motion.button>
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
          Explore Our Collection
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

export default Blog;
