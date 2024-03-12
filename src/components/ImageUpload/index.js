// src/components/ImageUpload.js
import React, { useState } from 'react';
import './index.css';
const ImageUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div className='button-container'>
      <input type="file" onChange={handleFileChange}  className='input-style'/>
      <button onClick={handleUpload} className='button'>Upload</button>
    </div>
  );
};

export default ImageUpload;
