import React from 'react';
import productData from '../product';

const ImageComponent = () => {
  return (
    <Card.Img variant="top" src={productData.imagePath} alt="Product" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  );
}

export default ImageComponent;
