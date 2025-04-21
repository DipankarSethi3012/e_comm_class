import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Fashion Trends for 2025",
    content: `
      Discover the latest trends in clothing and accessories to elevate your wardrobe this year.
      From oversized blazers to earthy tones and metallic accents, 2025 is all about bold statements
      and sustainable choices. Embrace vintage revivals and tech-integrated fashion for a futuristic edge.
      Don't forget to accessorize smartly—layered jewelry and textured bags are in!
    `,
    image: "https://i.pinimg.com/736x/d6/bc/ce/d6bcce4be1856a743ff29adca04d49ac.jpg",
    date: "April 10, 2025",
  },
  {
    id: 2,
    title: "How to Style a Capsule Wardrobe",
    content: `
      Learn how to create a versatile wardrobe with just a few key pieces. A capsule wardrobe focuses on
      timeless styles, quality over quantity, and minimizing clutter. Start with essentials like a white shirt,
      tailored trousers, and a classic trench coat. Mix and match to maximize your outfit possibilities!
    `,
    image: "https://i.pinimg.com/474x/3c/54/24/3c54247d6f09356674c3bcc4d9099d3e.jpg",
    date: "April 5, 2025",
  },
  {
    id: 3,
    title: "Sustainable Fashion: Why It Matters",
    content: `
      Explore eco-friendly clothing options and their impact on the planet. From organic cotton to recycled fabrics,
      sustainable fashion is reshaping the industry. Supporting local artisans, choosing ethical brands,
      and embracing second-hand fashion all contribute to a greener future.
    `,
    image: "https://i.pinimg.com/474x/28/11/b1/2811b1359f8274024d64f5f296fdff9b.jpg",
    date: "March 28, 2025",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div style={{ padding: "20px" }}>Blog post not found.</div>;
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", fontFamily: "'Segoe UI', sans-serif" }}>
      <img src={blog.image} alt={blog.title} style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }} />
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{blog.title}</h1>
      <p style={{ color: "#7D6E5E", marginBottom: "30px" }}>{blog.date}</p>
      <p style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#4A3F35" }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;