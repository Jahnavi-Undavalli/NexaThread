// src/App.js
import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ProductDisplay from './components/ProductDisplay';
import analyzeImage from './services/visionAPI';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleUpload = async (file) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result.split(',')[1];
        const response = await analyzeImage(base64data);
        setProducts(response.productSearchResults.results);
      };
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', textAlign: 'center', padding: '20px', fontFamily: "sans-serif", height: '100vh' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '1000px', height:"300px", margin: '0 auto' }}>
        <h1 style={{ color: '#333', marginBottom: '30px' }}>Image Search</h1>
        <ImageUpload onUpload={handleUpload} />
       
      </div>
      <hr style={{ marginTop: '20px', marginBottom: '20px', border: 'none', borderBottom: '1px solid #ccc' }} />
      <div style={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: '0 auto' }}>
        <ProductDisplay products={products} />
      </div>
    </div>
  );
};

export default App;
