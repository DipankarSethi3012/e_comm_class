import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const JewelryPage = () => {
  // Sample jewelry products with real images
  const products = [
    {
      product_id: 1,
      product_name: 'Gold Necklace',
      price: 120,
      image_url: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      product_id: 2,
      product_name: 'Diamond Ring',
      price: 250,
      image_url: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      product_id: 3,
      product_name: 'Silver Bracelet',
      price: 80,
      image_url: 'https://images.pexels.com/photos/750148/pexels-photo-750148.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      product_id: 4,
      product_name: 'Pearl Earrings',
      price: 100,
      image_url: 'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <motion.div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f9f9f9',
        color: '#333',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          height: '500px',
          backgroundImage:
            'url("https://i.pinimg.com/1200x/dc/40/25/dc4025150a3fa3fc643a763a824d2230.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <motion.h1
          style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fine Jewelry
        </motion.h1>
        <motion.p
          style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our responsibly made fine jewelry collection, crafted with
          care and elegance.
        </motion.p>
      </section>

      {/* Dynamic Jewelry Products */}
      <section style={{ padding: '50px 20px', backgroundColor: '#fff' }}>
        <h2
          style={{
            fontSize: '32px',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#4A3F35',
          }}
        >
          Our Collection
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.product_id}
              style={{
                width: '200px',
                textAlign: 'center',
                backgroundColor: '#fefefe',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={product.image_url}
                alt={product.product_name}
                style={{ width: '100%', borderRadius: '6px' }}
              />
              <p
                style={{
                  fontWeight: 'bold',
                  marginTop: '10px',
                  color: '#4A3F35',
                }}
              >
                {product.product_name}
              </p>
              <p style={{ color: '#777' }}>€{product.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default JewelryPage;